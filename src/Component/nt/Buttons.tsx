import { FunctionComponent } from 'react';
import Button from './Button';
import { faMagnifyingGlass, faList, faPenToSquare,
    faPaperPlane, faTrashCan, faReply,
    faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

interface Props{
    onClick: Function;
    text?: string;
}

const SearchButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        color='default'
        text='검색'
        onclick={()=>onClick()}
        icon={{iname: faMagnifyingGlass}}
        width={'w-[85px]'}
    />
    );
}

const GotoListButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        fillType='outline'
        color='default'
        text='목록'
        onclick={()=>onClick()}
        icon={{iname: faList}}
        width={'w-[85px]'}
    />
    );
}

const WriteButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        fillType='outline'
        color='default'
        text='글쓰기'
        onclick={()=>onClick()}
        icon={{iname: faPenToSquare}}
        width={'w-[85px]'}
    />
    );
}

const FormSubmitButton: FunctionComponent<Props> = ({onClick, text})=>{
    return (
    <Button
        color='default'
        text={text}
        onclick={()=>onClick()}
        icon={{iname: faPaperPlane, position:'right'}}
        width={'w-[85px]'}
    />
    );
}

const UpdateButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        fillType='outline'
        color='danger'
        text='수정'
        onclick={()=>onClick()}
        icon={{iname: faPenToSquare}}
        width={'w-[85px]'}
    />
    );
}

const DeleteButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        color='cancel'
        text='삭제'
        onclick={()=>onClick()}
        icon={{iname: faTrashCan}}
        width={'w-[85px]'}
    />
    );
}

const ReplyButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        fillType='outline'
        color='default'
        text='답변'
        onclick={()=>onClick()}
        icon={{iname: faReply, position: 'right'}}
        width={'w-[85px]'}
    />
    );
}

const BackToButton: FunctionComponent<Props> = ({onClick})=>{
    return (
    <Button
        color='cancel'
        text='취소'
        onclick={()=>onClick()}
        icon={{iname: faArrowLeftLong}}
        width={'w-[85px]'}
    />
    );
}

export {SearchButton, GotoListButton, WriteButton,
    FormSubmitButton, UpdateButton, DeleteButton, ReplyButton,
    BackToButton };