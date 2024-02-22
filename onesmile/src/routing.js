import { createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import Register from "./components/Register";
import Login from "./components/Login";
import Containts from "./components/Content";
import Treatments from "./components/Treatments";
import Appointments from "./components/Appoinments";
import Admin from "./components/Admin";
import Appointmentsnew from "./components/Appointmentsnew";
import Dheader from "./doctor_components/Dheader";
import Adminhome from "./admin_components/Adminhome";
import Aheader from "./admin_components/Aheader";
import Dappointmnets from "./doctor_components/Dappointmnets";
import Examination from "./doctor_components/Examination";
import AppointmentReschedule from "./doctor_components/AppointmentReschedule";
import Userdetails from "./admin_components/Userdetails";
import Examinationdetails from "./admin_components/Examinationdetails";
import Appointmentsdetails from "./admin_components/Appointmentsdetails";
import Adddoctors from "./admin_components/Adddoctors";
import AdminMedicalStore from "./admin_components/AdminMedicalStore";
import DoctorMedicine from "./doctor_components/DoctorMedicine";
import ForgotPassword from "./components/ForgotPassword";
import Payments from "./components/Payments";
import EnquiryDetails from "./admin_components/EnquiryDetails";
import MyProfile from "./components/MyProfile";
import AllPayments from "./admin_components/AllPayments";
import UserAppointments from "./components/UserAppointments";
import UserExamination from "./components/UserExamination";
import UserPayments from "./components/UserPayments";
import UserReschedule from "./components/UserReschedule";


const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
       {
        path: "/loginpage",
        element: <Login></Login>
      },
      {
        path: "/",
        element: <Containts></Containts>
      },
      {
        path:"/registerpage",
        element:<Register></Register>

      },
      {
        path:"/treatmentspage",
        element:<Treatments></Treatments>

      },
      {
        path:"/appointmentspage",
        element:<Appointmentsnew/>

      },  {
        path:"/adminpage",
        element:<Admin/>

      },
      {
        path:"/Dheaderpage",
        element:<Dheader/>

      },
      {
        path:"/adminhomepage",
        element:<Adminhome/>

      },
      {
        path:"/Dappointmnetspage",
        element:<Dappointmnets/>

      },
      {
        path:"/Examinationpage",
        element:<Examination/>

      },
      {
        path:"/AppointmentReshedulepage",
        element:<AppointmentReschedule/>
      },
      {
        path:"/Userdetailspage",
        element:<Userdetails/>
      },
      {
        path:"/Examinationdetailspage",
        element:<Examinationdetails/>
      },
      {
        path:"/Appointmentdetailspage",
        element:<Appointmentsdetails/>
      },
      {
        path:"/Adddoctorspage",
        element:<Adddoctors/>
      },
      {
        path:"/AdminMedicalStorepage",
        element:<AdminMedicalStore/>
      },
      {
        path:"/DoctorMedicinepage",
        element:<DoctorMedicine/>
      }, {
        path:"/ForgotPasswordpage",
        element:<ForgotPassword/>
      },
      {
        path:"/paymentspage",
        element:<Payments/>
      },
      {
        path:"/EnquiryDetailspage",
        element:<EnquiryDetails/>
      },
      {
        path:"/MyProfilepage",
        element:<MyProfile/>
      },
      {
        path:"/Allpaymentspage",
        element:<AllPayments/>
      },
      {
        path:"/UserAppointmentspage",
        element:<UserAppointments/>
      },
      {
        path:"/UserExaminationpage",
        element:<UserExamination/>
      },
      {
        path:"/UserPaymentspage",
        element:<UserPayments/>
      },
      {
        path:"/UserReschedulepage",
        element:<UserReschedule/>
      },
      
      
    ],
  },
]);
export default router;
