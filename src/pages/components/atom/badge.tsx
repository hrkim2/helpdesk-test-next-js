import {Badge, ErrorBadge, QuestionBadge, RequestBadge} from '../../../Component/atom/Badge';

export default function Badges() {

  return (
    <>
      <div>
        <Badge text={'0'} className={'cancel'}/>
        <Badge text={'-'} className={'cancel'}/>
        <Badge text={'100'} className={'default'}/>
      </div>
      <div>
        <ErrorBadge/>
        <QuestionBadge/>
        <RequestBadge/>
      </div>
    </>
  );
}