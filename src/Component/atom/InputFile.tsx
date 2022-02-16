import { useState, FunctionComponent, ChangeEvent } from 'react';

interface Accept {
    size?: number;
    sizeUnit?: string;
    ext?: string;
    text?: string;
}
interface Props {
    name?: string;
    id?: string;
    multiple?: boolean;
    addClass?: string;
    accept?: Accept;
}
interface FileConfig {
    id: number | null;
    addClass?: string;
}

const FILE_CLASS = `block w-full pt-1 text-sm text-cancel border border-0 cursor-pointer
file:mr-2 file:mb-0.5 file:pt-1 file:pb-0.5 file:px-1.5 file:cursor-pointer
file:rounded-md file:border-0
file:text-xs
file:bg-efefef file:text-black hover:file:bg-cancel hover:file:text-white focus:file:bg-cancel focus:file:text-efefef`;

function getAccept(accept?:Accept){
    if(accept){
        let {size, sizeUnit, ext, text} = accept;
        const extList = ext ? getExtFormat(ext) : [];

        if(ext && !size){
            text = `${ext} 형식의 파일만 업로드 할 수 있습니다.`;
        }else if(size){
            sizeUnit = sizeUnit || 'KB';
            if(ext){
                text = `${ext} 형식의 파일만 업로드 할 수 있습니다(${size}${sizeUnit})`;
            }else{
                text = `${size}${sizeUnit} 크기 미만의 파일만 업로드 할 수 있습니다.`;
            }
        }

        return {size, sizeUnit, ext, text, extList};
    }else{
        return undefined;
    }
}

function getExtFormat(joinedStr:string){
    return joinedStr.split(',').map(str=>{
        if(str.indexOf('/')>0){
            return str.trim();
        }else{
            return '.'+str.trim();
        }
    });
}

/**
 * @param name
 * multiple인 경우 prefix로 사용하되, index는 첨부 순서대로 부여됨
 * @param id
 * multiple인 경우 prefix로 사용하되, index는 내부 로직에 의해 부여됨
 * @param multiple
 * 한 게시물에 여러 파일 업로드 가능여부
 * @param addClass
 * width등 간단한 css 속성 수정
 * @param accept
 */
const InputFile: FunctionComponent<Props> = ({name='file', id='file', multiple, addClass, accept})=>{
    const initFileConfig:FileConfig = {id: 0, addClass:''};
    const [fileConfigs, setFileConfigs] = useState([initFileConfig]);
    const configs = Array.from(fileConfigs);
    const validConfigs = configs.filter(config=>{
        return config.id!==null;
    });
    const _accept = getAccept(accept);
    
    const onAddFile = ({target}:ChangeEvent<HTMLInputElement>)=>{
        const inputId = parseInt(target.id.split('-')[1]);
        const FileList = target.files;
        
        if(FileList&&FileList.length>0){
            const maxInputId = Math.max(...configs.map(config=>config.id||0));
        
            if(inputId>=maxInputId){
                let _configs = addConfig(validConfigs, maxInputId);
                setFileConfigs(_configs);
            }
        }else if(validConfigs.length>1){
            let _configs = inactiveConfig(validConfigs, inputId);
            setFileConfigs(_configs);
        }
    }

    const addConfig = (configs:FileConfig[], maxInputId:number)=>{
        let _configs = configs.map(config=>{
            config.addClass = 'pl-1.5 text-black hover:text-default/75 file:hidden';
            return config;
        });

        _configs.unshift({id:(maxInputId+1), addClass: ''});

        return _configs;
    }

    const inactiveConfig = (configs:FileConfig[], cancelId:number)=>{
        return configs.map(config=>{
            if(config.id===cancelId){
                config.id = null;
            }
            return config;
        });
    }
    
    let nameCount = 0;
    return <>
        <div className={`border-b-2 border-cancel focus:border-default ${addClass}`}>
            {validConfigs.map((fileConfig, i, {length})=>{
                return <input
                    key={`file-${fileConfig.id}`}
                    id={multiple?`${id}-${fileConfig.id}`:id}
                    name={(multiple&&i>0)?`${name}-${length-(++nameCount)-1}`:name}
                    type="file"
                    className={`${FILE_CLASS} ${fileConfig.addClass}`}
                    accept={_accept?.extList.join(',')}
                    onChange={(e)=>{
                        multiple && onAddFile(e);
                    }}
                />;
            })}
        </div>
        <div className="m-1 text-xs text-black cursor-default">
            {_accept ? _accept.text : ''}
        </div>
    </>;
}

export default InputFile;
// * accept관련 처리를 컴포넌트에서 하고 싶었으나 일단 submit event에서 구현 할 것.
// * 나중에 시간될 때 label로 구현하는 것으로 수정할 것.