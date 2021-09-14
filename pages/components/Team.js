import TeamCard from "./TeamCard";

const Team = () => {
    return(
        <div  className="w-11/12 mb-24">
        <h1 className="font-semibold text-2xl md:text-4xl text-center my-20">Our Team</h1>
        <div className="flex justify-between items-center gap-16">
            <TeamCard url="/user-1.jpg" name="Cauli Sen" proffesion="Senior Developer"/>
            <TeamCard url="/user-2.jpg" name="Henry Bandswith" proffesion="UI/UX Designer"/>
            <TeamCard url="/user-3.jpg" name="John Pero" proffesion="DevOps Engineer"/>
            </div>
        </div>
    )
}

export default Team;