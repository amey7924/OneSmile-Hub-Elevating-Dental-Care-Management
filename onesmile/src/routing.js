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

      }
      
    ],
  },
]);
export default router;
