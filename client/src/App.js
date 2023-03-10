import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homepage from "./Components/Usercomponents/Home/Home";
import Loginpage from "./Components/Usercomponents/Login/Login";
import Signuppage from "./Components/Usercomponents/Signup/Signuppage";
import Login from "./Components/Admincomponents/Superadmin/Login";
import AdminUsersLogin from "./Components/Admincomponents/AdminUsers/AdminUsersLogin";
import AdminLogin from "./Components/Admincomponents/Admin/AdminLogin";
import AdminusersDashboard from "./Components/Admincomponents/AdminUsers/AdminusersDashboard";
import SuperadminDashboard from "./Components/Admincomponents/Superadmin/Dashboard";
import AdminDashboard from "./Components/Admincomponents/Admin/AdminDashboard";
import Adminusers from "./Components/Admincomponents/Admin/Adminusers";
import Admininbox from "./Components/Admincomponents/Admin/Admininbox";
import Adminlist from "./Components/Admincomponents/Superadmin/Adminlist";
import Superadmininbox from "./Components/Admincomponents/Superadmin/Superadmininbox";
import Adminusersinbox from "./Components/Admincomponents/AdminUsers/Adminusersinbox";
import SuperadminLogin from "./Components/Admincomponents/Superadmin/Login";
import Loader, { Alladmins, Alladminusers,Allproducts,Adminauth,Adminusersauth,SuperAdminauth } from "./Loaders/Loader";
import Adminusersproducts from "./Components/Admincomponents/AdminUsers/Adminusersproducts";
import Admin from "./Protectedroutes/Admins/Adminroutes";
import Superadmin from "./Protectedroutes/Superadminroutes/Superadmin";
import Adminuser from "./Protectedroutes/Adminusersroutes/Adminuser";
import User from "./Protectedroutes/User/userroutes";
import Userlogin from "./Protectedroutes/User/login";
import Superadminlogin from "./Protectedroutes/Superadminroutes/superadminlogin";
import Adminlogin from "./Protectedroutes/Admins/Adminlogin";
import Adminuserlogin from "./Protectedroutes/Adminusersroutes/Adminuserlogin";
function App() {
 
  const Router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
         index:true,
          element:(<User><Homepage/></User>) ,loader:Allproducts
        }, {
          path: "login",
          element:(<Userlogin><Loginpage /></Userlogin>) ,
        },{
          path: "signup",
          element:(<Userlogin> <Signuppage /></Userlogin>),
        },{
          path:"adminuserlogin",element:(<Adminuserlogin><AdminUsersLogin/></Adminuserlogin>)
        },{path:"superadminlogin",element:(<Superadminlogin><SuperadminLogin/></Superadminlogin>)}, {
          path:"adminlogin",element:(<AdminLogin/>) },{path:"admin",children:[{index:true,element:(<Admin><AdminDashboard/></Admin>)},
{path:"inbox",element:(<Admin><Admininbox/></Admin>),loader:Allproducts},{
          path:"users",element:<Admin><Adminusers/></Admin>,loader:Alladminusers
        }]},{
          path:"superadmin",children:[{
            index:true,element:(<Superadmin><SuperadminDashboard/></Superadmin>)
          },{path:"admins",element:<Superadmin><Adminlist/></Superadmin>,loader:Alladmins},
        {path:"inbox",element:<Superadmin><Superadmininbox/></Superadmin>,loader:Allproducts},]

        },{path:"adminuser",children:[{
          index:true,element:(<Adminuser><AdminusersDashboard/></Adminuser>)
        },{path:"inbox",element:(<Adminuser><Adminusersinbox/></Adminuser>)},{path:"products",element:(<Adminuser><Adminusersproducts/></Adminuser>),loader:Allproducts}]}
      ],
    },
  ]);
    
 
  return (
<div className="App">
<RouterProvider router={Router} />
    </div>
    
  );
}

export default App;
