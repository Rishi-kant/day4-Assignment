
function Profile(props){
    return(
      <div  style={{border:"2px solid green"}}>
      <h2>{props.name}</h2>
      <img src={props.imagesrc} width="100px" alt="images of content"/>
      <p>{props.designation}</p>
      <p>{props.description}</p>
      </div>
    )

}

export default function Card(){
    return(
        <>
        <Profile
        name="Amit"
        imagesrc="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
        designation="Graphic Designer"
        description="Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design"
        />
        <Profile
        name="Ruhi"
        imagesrc="https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        designation="Singer"
        description="perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups"
        />
        </>
    )
}