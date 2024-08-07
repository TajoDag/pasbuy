// export const product = [
//   {
//     id: "1",
//     image: "https://s-cf-tw.shopeesz.com/file/37616bf7a089fc17687d655171c79701",
//     name: "[ Mercedes Benz ] Mercedes Benz Rear Back Seat Hooks Organizer For Mercedes Benz W203 W210 W211 W124 W202 W204 Car Accessaries",
//     price: "60.3",
//     rate: 3,
//   },
//   {
//     id: "2",
//     name: "✅[SG Ready Stock] Laptop Bag MacBook Por 3 14 15 16 17 13.3 15.6 Inch Portable Computer Notebook Bag Waterproof Cover",
//     image: "https://s-cf-tw.shopeesz.com/file/b99e5aded3e3fa7280f6032135011f88",
//     price: "60.3",
//     rate: 5,
//   },
//   {
//     id: "3",
//     name: "Airbot Air Fryer AF680 Bucket 200 Degree Celsius Fryer Non-stick Pot Electric Multi Cooker Grill Oven",
//     image: "https://s-cf-tw.shopeesz.com/file/sg-11134201-22120-n7vz23oemklvdf",
//     price: "60.3",
//     rate: 3,
//   },
//   {
//     id: "4",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "5",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "6",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "7",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "8",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "9",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "10",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "11",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
//   {
//     id: "12",
//     name: "[SG Stock] Smart Watch Men's And Women's  Fitness Tracker Bluetooth Call Sports Watch",
//     image: "https://s-cf-tw.shopeesz.com/file/c228fc5a0a9fdb06ec877a93ae65cbc9",
//     price: "60.3",
//     rate: 4,
//   },
// ];
import React, { useEffect } from "react";
import { getAllProducts } from "./service";
import { useDispatch } from "react-redux";
import { startLoading } from "@redux/loadingReducer";
import { stopLoading } from "@redux/loadingReducer";
import { checkNull } from "../../../utils/checkNull";

export const Products = ({ bodyFilter, setTotal }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);
  // const body = checkNull(bodyFilter);
  // useEffect(() => {
  //   dispatch(startLoading());
  //   getAllProducts({ ...body, page: body.page - 1 })
  //     .then((res) => {
  //       setProducts(
  //         res.result.products.map((item) => ({
  //           ...item,
  //           key: item._id,
  //         }))
  //       );
  //       setTotal(res.result.pagination.total);
  //     })
  //     .finally(() => {
  //       dispatch(stopLoading());
  //     });
  // }, [bodyFilter]);
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(startLoading());
      try {
        const body = checkNull(bodyFilter);
        const res = await getAllProducts({ ...body, page: body.page - 1 });
        setProducts(
          res.result.products.map((item) => ({
            ...item,
            key: item._id,
          }))
        );
        setTotal(res.result.pagination.total);
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchProducts();
  }, [bodyFilter, dispatch, setTotal]);
  return { products };
};
