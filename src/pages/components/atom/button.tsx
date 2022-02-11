import Button from '../../../Component/atom/Button';
import { faFloppyDisk, faMagnifyingGlass, faTrashCan, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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
        fillType='outline'
        size='sm'
        icon={{iname: faFloppyDisk}}
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        size='sm'
        icon={{iname: faMagnifyingGlass}}
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        text='보내기'
        size='sm'
        icon={{iname: faPaperPlane, position: "right"}}
        onclick={()=>{}}
        />
        <Button
        fillType='outline'
        text='삭제'
        size='sm'
        icon={{iname: faTrashCan}}
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
    </>
  );
}