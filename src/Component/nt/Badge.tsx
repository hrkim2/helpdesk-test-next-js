import { FunctionComponent } from 'react';

interface Props {
    text: string;
    className?: string;
}

const getBadgeClass = (className:string="default")=>{
    const commonClass = 'text-white text-xs font-semibold mr-2 cursor-default select-none pl-[4px] pr-[5px] pt-[4px] pb-[2px] rounded';
    return commonClass+` bg-${className}`;
}
/**
 * @param text
 * @param class
 * default | success | warning | danger | cancel
 */
const Badge: FunctionComponent<Props> = ({text, className})=>{
    return (
        <span className={getBadgeClass(className)}>
            {text}
        </span>
    );
}

const ErrorBadge = ()=><Badge text='오류' className={'danger'}/>;
const QuestionBadge = ()=><Badge text='질문' className={'warning'}/>;
const RequestBadge = ()=><Badge text='요청' className={'success'}/>;

export {Badge, ErrorBadge, QuestionBadge, RequestBadge};
