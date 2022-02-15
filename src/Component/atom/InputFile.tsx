import { useState, FunctionComponent, ChangeEvent } from 'react';

interface FileConfig {
    id: number | null;
    addClass?: string;
}
const FILE_CLASS = `block w-full pt-1 text-sm text-cancel border border-0 cursor-pointer
file:mr-2 file:mb-0.5 file:pt-1 file:pb-0.5 file:px-1.5 file:cursor-pointer
file:rounded-md file:border-0
file:text-xs
file:bg-efefef file:text-black hover:file:bg-cancel hover:file:text-white focus:file:bg-cancel focus:file:text-efefef`;

//TODO : multiple 옵션 분기 / file 확장자 제한(인터셉터 식으로 옵션 존재할 시 먼저 실행 후 onAddFile 호출하던가 할 것) 
/**
 * @param 
 * accept="image/jpeg,.txt"
 * multiple
 */
const InputFile: FunctionComponent = ()=>{
    const initFileConfig:FileConfig = {id: 0, addClass:''};
    const [fileConfigs, setFileConfigs] = useState([initFileConfig]);
    
    const onAddFile = (e:ChangeEvent<HTMLInputElement>)=>{
        const FileList = e.target.files;
        const configs = Array.from(fileConfigs);
            
        if(FileList&&FileList.length>0){
            let _configs = configs.map(config=>{
                config.addClass = 'file:hidden text-black hover:text-default/75';
                return config;
            });
            _configs.unshift({id:_configs.length, addClass: ''});

            setFileConfigs(_configs);
        }else{
            const validIdList = configs.filter(config=>{
                return config.id!==null;
            });
            const inputId = parseInt(e.target.id.split('-')[1]);

            if(validIdList.length>1){
                let _configs = configs.map(config=>{
                    if(config.id===inputId){
                        config.id = null;
                    }
                    return config;
                });

                setFileConfigs(_configs);
            }
        }
    }
    
    return <>
        <div className='border-b-2 border-cancel focus:border-default'>
            {fileConfigs.map((fileConfig)=>{
                if(fileConfig.id!==null){
                    return <input
                        key={`file-${fileConfig.id}`}
                        id={`file-${fileConfig.id}`}
                        type="file"
                        multiple
                        className={`${FILE_CLASS} ${fileConfig.addClass}`}
                        onChange={(e)=> onAddFile(e) }
                    />;
                }
            })}
        </div>
        <div className="mt-1 text-xs text-black cursor-default">파일 용량은 ?KB를 넘을 수 없습니다</div>
    </>;
}

export default InputFile;
