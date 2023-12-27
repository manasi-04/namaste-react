import { useState, useEffect } from "react";

const useResData = (resId) => {
    let [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    let menu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9455888&lng=77.5712556&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let jsonMenu = await menu.json();
    console.log("menu", jsonMenu);
    setResMenu(jsonMenu.data);
  };
  return resMenu;
};

export default useResData;