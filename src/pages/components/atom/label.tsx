import Label from '../../../Component/atom/Label';

export default function Buttons() {

  return (
    <>
      <div>
        <Label text={'이름'} forId={'name'} requied={true}/>
        <input type='text' id='name' placeholder='이름 입력쓰'/>
      </div>
      <div>
        <Label text={'주소'} forId={'address'} position={'inline'}/>
        <input type='text' id='address' placeholder='서울시 송파구'/>
      </div>
      <div>
        <Label forId={''} text={' '}/>
      </div>
    </>
  );
}