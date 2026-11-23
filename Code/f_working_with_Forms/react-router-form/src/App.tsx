import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ContactPage, contactPageAction } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="contact" />, // Hashbang - simulating an event !
  },
  {
    path: "/contact",
    element: <ContactPage />,
    action: contactPageAction, // ActionMethod!
  },
  // http://localhost:3000/thank-you/nicholas
  {
    path: "/thank-you/:name", //  {name:'nicholas'}
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
