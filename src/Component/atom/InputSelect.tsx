import { FunctionComponent, Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Option {
    text?: string;
    value?: string | number;
}

interface Props {
    id?: string;
    options?: Option[];
    value?: string | number;
    addClass?: string;
}

const DATA_NOT_FOUNDED = '조회된 데이터가 없습니다.';
const CLASS_NAME = {
    button: ()=>{
        const font = 'text-sm text-left text-default font-semibold sm:text-sm hover:text-white focus:text-white';
        const size = 'w-full py-2 pl-3 pr-10';
        const feature = 'bg-white hover:bg-default focus:bg-default rounded-md border border-default';
        const props = 'relative cursor-pointer focus:outline-none duration-75 hover:opacity-80 hover:saturate-150 focus:opacity-80 focus:saturate-150';
        
        return `${font} ${size} ${feature} ${props}`;
    },
    option: ()=>{
        const font = 'text-normal sm:text-sm';
        const size = 'w-full py-1 mt-1 max-h-60';
        const feature = 'bg-white rounded-md ring-1 ring-black/10';
        const props = 'absolute z-10 overflow-auto shadow-lg focus:outline-none';

        return `${font} ${size} ${feature} ${props}`;
    }
}

const SelectHidden = ({id='', value='', options=[]}:Props)=>{
  const OptionList = ()=>{
      return <>
          {options.map((option, i)=>{
              return <option key={`option_${i}`} value={option.value}>
                  {option.text}
              </option>;
          })}
      </>
  }

  return <select
      id={`${id || 'select_box'}`}
      value={value}
      onChange={()=>{}}
      className='hidden'
  >
      <OptionList/>
  </select>;
}

function getSelected(options:Option[], value:string|number){
    if(options.length==0){
        return {text: DATA_NOT_FOUNDED, value:''};
    }else{
        const filteredList = options.filter(option=>option.value===value);
        return filteredList.length===0 ? options[0] : filteredList[0];
    }
}

const InputSelect:FunctionComponent<Props> = ({id='', options=[], value='', addClass=''})=>{
  const [selected, setSelected] = useState(getSelected(options, value));

  return (
    <div className={addClass}>
      <SelectHidden id={id} value={selected.value} options={options} />
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1 w-full">
          <Listbox.Button className={CLASS_NAME.button()}>
            <span className="inline truncate">{selected.text}</span>
            <FontAwesomeIcon icon={faAngleDown} className='absolute right-3 top-2.5 content-center'/>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <Listbox.Options className={CLASS_NAME.option()}>
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `${(selected.text==option.text || active) ? 'text-default bg-efefef' : 'text-calcel'}
                    cursor-pointer select-none relative py-2 pl-5 pr-4`
                  }
                   value={option}
                >
                  <span className={`block truncate text-sm`}>
                    {option.text}
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default InputSelect;