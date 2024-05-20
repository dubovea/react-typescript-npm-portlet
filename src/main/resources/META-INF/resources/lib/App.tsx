// import "../css/develop.scss";
import React from "react";;
import BlogItems from "./components/BlogItems";

const App = () => {
  // const [items, setItems] = useState<INavigationMenuItem[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const siteGroupId: string = window.Liferay.ThemeDisplay.getSiteGroupId(),
  //       fetchUrl: string = `/o/headless-delivery/v1.0/sites/${siteGroupId}/navigation-menus`;
  //     let response = await fetch(fetchUrl, {
  //       headers: {
  //         "X-CSRF-Token": window.Liferay.authToken, // 👈👈👈 Set the token
  //         "Content-Type": "application/json",
  //       },
  //       method: "GET",
  //       credentials: "same-origin",
  //     });
  //     let data = await response.json(),
  //       aTempItems: INavigationMenuItem[] = [];
  //     data.items.forEach((item: Items) => {
  //       item.navigationMenuItems.forEach((subItem) => {
  //         aTempItems.push(subItem);
  //       });
  //     });
  //     setItems(aTempItems);
  //   };
  //   fetchData();
  // }, []);

  // const handleAdd = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   console.log(event);
  //   const fetchData = async () => {
  //     const siteGroupId: string = window.Liferay.ThemeDisplay.getSiteGroupId(),
  //       fetchUrl: string = `/o/headless-delivery/v1.0/sites/${siteGroupId}/navigation-menus`,
  //       json = {
  //         creator: {},
  //         name: "Test",
  //         navigationMenuItems: [
  //           {
  //             creator: {},
  //             id: 0,
  //             link: "test",
  //             name: "test",
  //             url: "https://www.youtube.com/playlist?list=PLCAZyR6zw2px5C7L2cCG4aywx6g58MIoP",
  //             useCustomName: true,
  //           },
  //         ],
  //         navigationType: "Primary",
  //       };
  //     fetch(fetchUrl, {
  //       headers: {
  //         "X-CSRF-Token": window.Liferay.authToken, // 👈👈👈 Set the token
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(json),
  //       method: "POST",
  //       credentials: "same-origin",
  //     });
  //   };
  //   fetchData();
  // };
  return (
    <>
      <div className="container">
        <BlogItems />
      </div>
    </>
  );
};

export default App;
