import Collapse from 'Component/bp/Collapse';

const dataList = [
    {itemId: "0", title: 'What is Flowbite?', boardType: 0, boardTypeName: '사용법', content: `<p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
    <p>Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>`},
    {itemId: "1", title: 'Is there a Figma file available?', boardType: 1, boardTypeName: '에러조치', content: `<p>Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
    <p>Check out the <a href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>`},
    {itemId: "2", title: 'What are the differences between Flowbite and Tailwind UI?', boardType: 0, boardTypeName: '사용법', content: `<p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
    <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
    <p>Learn more about these technologies:</p>
    <ul className="pl-5 list-disc text-black">
        <li><a href="https://flowbite.com/pro/" className="text-default/50 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-default/50 hover:underline">Tailwind UI</a></li>
    </ul>`},
    {itemId: "3", title: 'What is Flowbite?', boardType: 0, boardTypeName: '사용법', content: `<p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
    <p>Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>`},
    {itemId: "4", title: 'Is there a Figma file available?', boardType: 1, boardTypeName: '에러조치', content: `<p>Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
    <p>Check out the <a href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>`},
    {itemId: "5", title: 'What are the differences between Flowbite and Tailwind UI?', boardType: 0, boardTypeName: '사용법', content: `<p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
    <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
    <p>Learn more about these technologies:</p>
    <ul className="pl-5 list-disc text-black">
        <li><a href="https://flowbite.com/pro/" className="text-default/50 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-default/50 hover:underline">Tailwind UI</a></li>
    </ul>`}
];

export default function CollapseListText(){
    
    return <div className='m-3'>
        <div className='italic text-lg text-bold'>Collapse List</div>
        <Collapse dataList={dataList}/>
    </div>;
}
