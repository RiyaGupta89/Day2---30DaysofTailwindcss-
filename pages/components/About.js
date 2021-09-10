import Card from "./Card";

const About = () => {
    return(

        <div className="h-screen w-11/12">
        <div className="flex justify-between items-center">
        <div>
            <h1 className="font-semibold text-3xl capitalize text-gray-900 font-sans pb-2">About our work</h1>
            <div className="h-1 w-24 rounded-full bg-red-600"></div>
            </div>
            <p className="py-6 text-sm text-gray-700 w-1/2 leading-5 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vel? Earum at obcaecati temporibus, id neque ullam ipsa cupiditate quidem sed eligendi sunt eius nulla, aliquam quo distinctio laudantium quam libero culpa dignissimos quae doloribus fugiat architecto aperiam! Tempora facilis odit animi alias qui aut.</p>
        </div>
        <div className="flex items-center gap-x-9 my-10">
        <Card img="/developer.svg" title="Learn coding"/>
        <Card img="/online.svg" title="Get your business online"/>
        <Card img="/work.svg" title="Have meetings comfortably"/>
        <Card img="/responsive.svg" title="Responsive websites"/>
        </div>
        </div>

    );
}

export default About;