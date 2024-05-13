import{useState} from "react";
import Nav from "./Nav";
import "../styles/reg.scss"
import Footer from "./footer";

const Register = () => {
const [data, setData] = useState({
   firstName:"",
   middleName:"",
   dateOfBirth:"",
   age:"",
    phoneNumber:"",
    emails:"",
    surname:"",
    bussinessAddress:{
      addressO:"",
      addressB:"",
      city:"",
      postalCode:"",
      stateProvince:"",
      country:"",
    },
    residentialAddress:{
      address:"",
      Address:"",
      city:"",
      postalCode:"",
      stateProvince:"",
      country:"",
    },
   spiritualInformation:{
    dateOfNewBirth:"",
    baptizedByImmersion:Boolean,
    baptizedByHolySpirit:Boolean,
    },
    churchInformation:{
    attendedFoundationClass:Boolean,
    dateJoinedChurch:"",
     memberOfWSF:Boolean,
     completedWOFBI:Boolean,
     cvUpload:"",
     signature:"",
     dateSigned:"",
    }

    
});
  
const  handleChange =(e)=>{
  const {name,value}=e.target;
  setData({
    ...data,[name]:value

  })
    
}

const handleSubmit=(e)=>{
  e.preventDefault();
  const update = { ...data };
  console.log(update);
  alert("submitted")
  setData("");
}


  return <div className=" bg-white">
    <div className="reg">
   <Nav/>
    </div>

   <div className="reg-wrap w-[100%]">
    <div className="text-center mt-5 flex flex-col gap-6">
      <div className=""><h1 className="text-4xl font-semibold">Membership Application</h1>
      <h1 className="text-4xl font-semibold">Form</h1></div>
      <div className=" text-lg font-medium">ICTG GROUP ENGLISTMENT FORM</div>
    </div>
   </div>
   <form action="" onSubmit={handleSubmit} className="w-[100%] mt-6">
    <div className="container m-auto bg-[#E8E8E8] py-7 px-3 rounded-xl w-[100%]">
      <span className="font-medium bg-white rounded-xl px-5 py-2 text-medium">PERSONAL INFORMATION</span>
      <div className="mt-6">
        <label htmlFor="name" className="block mb-2 font-medium">Name</label>
       <div className="flex flex-col md:flex-row gap-3">
         <input type="text" className="flex-[1.3] py-2 px-3 focus:outline-none input" placeholder="Frist Name" name="firstName" value={data.firstName} onChange={handleChange}/>
        <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Middle Name" name="middleName" value={data.middleName} onChange={handleChange} />
        <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Surmane Name" name="surname" value={data.surname} onChange={handleChange} />
       </div>
      </div>
      <div className="mt-6">
        <label htmlFor="dob" className="block mb-2 font-medium">DOB</label>
         <input type="text" className=" py-2 px-3 focus:outline-none  input" placeholder="Date of brith" name="dateOfBirth"value={data.dateOfBirth} onChange={handleChange}/>
      </div>
      <div className="mt-6">
        <label htmlFor="age" className="block mb-2 font-medium">Age</label>
         <input type="text" className=" py-2 px-3 focus:outline-none  input" placeholder="" name="age" value={data.age} onChange={handleChange} />
      </div>
      <div className="mt-6">
        <label htmlFor="Telephone" className="block mb-2 font-medium">Telephone</label>
         <input type="tel" className=" py-2 px-3 focus:outline-none  input" placeholder="" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
      </div>
      <div className="mt-6 w-[100%]">
        <label htmlFor="Email" className="block mb-2 font-medium w-[100%] block">Email</label>
         <input type="text" className=" py-2 px-3 focus:outline-none  input" placeholder="" name="emails" value={data.emails} onChange={handleChange} />
      </div>
      <div className="mt-6 ">
        <label htmlFor="Address" className="block mb-2 font-medium">Bussiness/Offfice Address</label>
        <div className="mt-3 flex flex-col gap-4 ">
         <input type="text" className=" py-2 px-3 focus:outline-none  input " placeholder="Address Line 1" name="address1" value={data.bussinessAddress.addressB} onChange={handleChange} />
         <input type="text" className=" py-2 px-3 focus:outline-none  input" placeholder="Address Line 2" name="address2" value={data.bussinessAddress.addressO} onChange={handleChange}/>

        </div>
          <div className="flex gap-4 mt-4">
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="City" name="city" value={data.cityB} onChange={handleChange}/>
         <input type="text" className="flex-[1.4] py-2 px-3 focus:outline-none  input" placeholder="State/Province/Region" name="stateProvince" value={data.bussinessAddress.stateProvince} onChange={handleChange}/>
       </div>
          <div className="flex gap-4 mt-4">
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Postal Code" name="postCode" value={data.bussinessAddress.postalCode} onChange={handleChange}/>
         <input type="text" className="flex-[1.4] py-2 px-3 focus:outline-none  input" placeholder="Country" name="country" value={data.bussinessAddress.country} onChange={handleChange} />
       </div>
      </div>
      <div className="mt-6 ">
        <label htmlFor="Address" className="block mb-2 font-medium">Residential Address</label>
        <div className="mt-3 flex flex-col gap-4 ">
         <input type="text" className=" py-2 px-3 focus:outline-none  input " placeholder="Address Line 1" name="address1" value={data.address} onChange={handleChange} />
         <input type="text" className=" py-2 px-3 focus:outline-none  input" placeholder="Address Line 2" name="address2" value={data.residentialAddress.Address} onChange={handleChange}/>

        </div>
          <div className="flex gap-4 mt-4">
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="City" name="city" value={data.city} onChange={handleChange} />
         <input type="text" className="flex-[1.4] py-2 px-3 focus:outline-none  input" placeholder="State/Province/Region" name="statetProvince" value={data.residentialAddress.stateProvince} onChange={handleChange} />
       </div>
          <div className="flex gap-4 mt-4">
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Postal Code" name="postalCode" value={data.residentialAddress.postalCode} onChange={handleChange}/>
         <input type="text" className="flex-[1.4] py-2 px-3 focus:outline-none  input" placeholder="Country" name="country" value={data.residentialAddress.country} onChange={handleChange}/>
       </div>
      </div>



    </div>
    <div className="mt-12 container m-auto bg-[#E8E8E8] py-7 px-3 rounded-xl w-[100%]">
      <span className="font-medium bg-white rounded-xl px-5 py-2  text-medium">SPIRITUAL INFORMATION</span>

     
          <div className="  mt-6">
            <label htmlFor="" className="block mb-2 font-medium">Date of New Birth</label>
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Date you became born again" name="dateOfNewBirth" value={data.spiritualInformation.dateOfNewBirth} onChange={handleChange}/>
        
       </div>
      
          <div className=" mt-4">
              <label htmlFor="" className="block mb-2 font-medium">Have you been baptized by immersion?</label>
              <div className="flex gap-3">
         <input type="text" className=" py-2 px-3 focus:outline-none " placeholder="Yes" name="baptizedByImmersion" value={data.spiritualInformation.baptizedByImmersion}  onChange={handleChange}/>
         <input type="text" className="] py-2 px-3 focus:outline-none" placeholder="No" name="baptizedByImmersion"value={data.spiritualInformation.baptizedByImmersion}  onChange={handleChange}/>

              </div>
       </div>

    
          <div className="mt-4">
              <label htmlFor="" className="block mb-2 font-medium">Have you been baptized in the Holy Ghost?</label>
              <div className="flex gap-3">
         <input type="text" className=" py-2 px-3 focus:outline-none" placeholder="Yes" name="baptizedByHolySpirit" value={data.spiritualInformation.baptizedByHolySpirit} onChange={handleChange}/>
         <input type="text" className="inline py-2 px-3 focus:outline-none" placeholder="No" name="baptizedByHolySpirit" value={data.spiritualInformation.baptizedByHolySpirit} onChange={handleChange}/>

              </div>
       </div>
    </div>
{/*  */}
    <div className="mt-12 container m-auto bg-[#E8E8E8] py-7 px-3 rounded-xl w-[100%]">
      <span className="font-medium bg-white rounded-xl px-5 py-2 text-medium">CHURCH INFORMATION</span>

     
          <div className="  mt-6">
            <label htmlFor="" className="block mb-2 font-medium">Date joined the chuch</label>
         <input type="text" className="flex-1 py-2 px-3 focus:outline-none  input" placeholder="Date you became born again" name="dateJoinedChurch" value={data.churchInformation.dateJoinedChurch} onChange={handleChange}/>
        
       </div>
      
          <div className=" mt-4">
              <label htmlFor="" className="block mb-2 font-medium">Have you attended Believers’ Foundation Class?</label>
              <div className="flex gap-3">
         <input type="text" className=" py-2 px-3 focus:outline-none " placeholder="Yes" name="attenedFoundationClass" value={data.churchInformation.attendedFoundationClass} onChange={handleChange}/>
         <input type="text" className="] py-2 px-3 focus:outline-none" placeholder="No" name="attendedFoundationClass"  value={data.churchInformation.attendedFoundationClass} onChange={handleChange}/>

              </div>
       </div>

    
          <div className="mt-4">
              <label htmlFor="" className="block mb-2 font-medium">Do you belong to WSF?</label>
              <div className="flex gap-3">
         <input type="text" className=" py-2 px-3 focus:outline-none" placeholder="Yes" name="memberOfWSF"  value={data.churchInformation.memberOfWSF} onChange={handleChange}/>
         <input type="text" className="inline py-2 px-3 focus:outline-none" placeholder="No" name="memberOfWSF" value={data.churchInformation.memberOfWSF} onChange={handleChange}/>

              </div>
       </div>
          <div className="mt-4">
              <label htmlFor="" className="block mb-2 font-medium">Have you done WOFBI?</label>
              <div className="flex gap-3">
         <input type="text" className=" py-2 px-3 focus:outline-none" placeholder="Yes" name="completedWOFBI" value={data.churchInformation.completedWOFBI} onChange={handleChange}/>
         <input type="text" className="inline py-2 px-3 focus:outline-none" placeholder="No" name="completedWOFBI" value={data.churchInformation.completedWOFBI} onChange={handleChange}/>

              </div>
       </div>

       
          <div className="  mt-6">
            <label htmlFor="" className="block mb-2 font-medium">Upload your CV below</label>
            <div className="div  h-[13rem] w-[40%] bg-white pt-4">

         <input type="file" className=" px-3 focus:outline-none h-[15rem] w-[50%]" placeholder="" name="cvUpload" value={data.churchInformation.cvUpload} onChange={handleChange}/>
            </div>
        
       </div>
          <div className="  mt-6">
            <label htmlFor="" className="block mb-2 font-medium">Signature</label>
            <div className="div  h-[13rem] w-[40%] bg-white pt-4">

         <input type="file" className=" px-3 focus:outline-none h-[15rem] w-[50%]" placeholder="" name="signnature" value={data.churchInformation.signature} onChange={handleChange}/>
            </div>
        
       </div>
             <div className="mt-4 grid grid-col-2 lg:grid-col-3">
              <label htmlFor="" className="block mb-2 font-medium">Date</label>
              <div className="flex flex-col md:flex-row gap-3 w-[100%]">
            <input type="text" className=" py-2 px-3 focus:outline-none w-[80%] lg:w-[20%]" placeholder="DD" name="dateSigned" value={data.churchInformation.dateSigned} onChange={handleChange}/>
            <input type="text" className="inline py-2 px-3 focus:outline-none w-[80%] lg:w-[20%]" placeholder="MM" name="dateSigned" value={data.churchInformation.dateSigned} onChange={handleChange}/>
            <input type="text" className="inline py-2 px-3 focus:outline-none w-[80%] lg:w-[20%]" placeholder="YY" name="dateSigned" value={data.churchInformation.dateSigned} onChange={handleChange} />

              </div>
       </div>
    </div>
    <div className="flex justify-center w-[100%] mt-5">

     <button className="text-[white] block md:text-md font-medium bg-[red] px-4 py-2 rounded-md mt-4 border-solid border-2 border-[#e5e5e5]">SUBMIT</button>
    </div>
   </form>
   <Footer/>
  </div>;
};

export default Register;



 
  

  
