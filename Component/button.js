export default function button({text, className, onClickBtn}){
    
    return <>
        {onClickBtn ?
            <button
                className={className}
                onClick={()=>onClickBtn()}
            >
                {text}
            </button>
          : <button className={className}>{text}</button>}
        <style jsx>{`
            button{
                background-color: #fff;
                padding: 5px 8px;
                font-size:14px;
                border: 0px;
                cursor: pointer;
            }
            button.btn-action-contained{
                background-color: #64CCC9;
                color: #fff;
            }
            button.btn-action-contained:hover{
                background-color: #4a9897;
            }
            button.btn-action-outlined{
                border: 1px solid #64CCC9;
                color: #64CCC9;
            }
            button.btn-action-outlined:hover{
                border: 1px solid #4a9897;
                color: #4a9897;
            }
            button.btn-cancel-contained{
                background-color: #aaa;
                color: #fff;
            }
            button.btn-cancel-contained:hover{
                background-color: #777;
            }
            button.btn-cancel-outlined{
                border: 1px solid #aaa;
                color: #aaa;
            }
            button.btn-cancel-outlined:hover{
                border: 1px solid #777;
                color: #777;
            }
        `}</style>
    </>;
}