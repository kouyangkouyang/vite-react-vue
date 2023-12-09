import pages from "../pages";

const routers = [
  {
    path: "/test1",
    element: <pages.Test1 />,
    children: [],
  },
  {
    path: "/test2",
    element: <pages.Test2 />,
    children: [],
  },
  {
    path: "/vue-test1",
    element: <pages.VueTest1 />,
    children: [],
  },
];

export default routers;
