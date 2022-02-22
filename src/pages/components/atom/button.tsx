import Button from '../../../Component/nt/Button';
import {SearchButton, GotoListButton, WriteButton, FormSubmitButton,
  UpdateButton, DeleteButton, ReplyButton, BackToButton } from '../../../Component/nt/Buttons';

export default function Buttons() {

  return (
    <>
      <div>
        <Button
        color='default'
        text='contain-default'
        onclick={()=>{console.log('click first')}}
        />
        <Button
        fillType='outline'
        color='default'
        text='outline-default'
        onclick={()=>{}}
        />
        <Button
        color='success'
        text='contain-success'
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        color='success'
        text='outline-success'
        onclick={()=>{}}
        />
        <Button
        color='danger'
        text='contain-danger'
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        color='danger'
        text='outline-danger'
        onclick={()=>{}}
        />
        <Button
        color='warning'
        text='contain-warning'
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        color='warning'
        text='outline-warning'
        onclick={()=>{}}
        />
        <Button
        color='cancel'
        text='contain-cancel'
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        color='cancel'
        text='outline-cancel'
        onclick={()=>{}}
        />
        <Button
        text='none'
        onclick={()=>{}}
        />
      </div>
      <div>
        <Button
        text='크기 : xs'
        size='xs'
        onclick={()=>{}}
        />
        <Button
        text='크기 : sm'
        size='sm'
        onclick={()=>{}}
        />
        <Button
        text='크기 : md'
        size='md'
        onclick={()=>{}}
        />
      </div>
      <div>
        <Button
        text='active'
        size='sm'
        onclick={()=>{}}
        />
        <Button
        text='disabled'
        size='sm'
        onclick={()=>{}}
        disabled={true}
        />
        <Button
        fillType='outline'
        text='disabled2'
        size='sm'
        onclick={()=>{}}
        disabled={true}
        />
      </div>
      <div><SearchButton onClick={()=>{console.log('search button')}}/></div>
      <div><GotoListButton onClick={()=>{console.log('list button')}}/></div>
      <div><WriteButton onClick={()=>{console.log('write button')}}/></div>
      <div><FormSubmitButton onClick={()=>{console.log('submit button')}} text={'등록'}/></div>
      <div><FormSubmitButton onClick={()=>{console.log('submit button')}} text={'수정'}/></div>
      <div><UpdateButton onClick={()=>{console.log('update button')}}/></div>
      <div><DeleteButton onClick={()=>{console.log('delete button')}}/></div>
      <div><ReplyButton onClick={()=>{console.log('reply button')}}/></div>
      <div><BackToButton onClick={()=>{console.log('go back button')}}/></div>
    </>
  );
}