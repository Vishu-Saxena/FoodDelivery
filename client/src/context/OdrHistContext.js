import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const orderHistoryContext = createContext();

const OderHisVal = (props)=>{
    const name = "order"
    const [orderHist , setOrderhist] = useState([]);

    // function to fetch to order history list
    const getorderhist=async()=>{
        try {
            const res = await axios.get('http://localhost:8080/api/ordershistory/getorders');
            if(res?.data?.getOrders){
                setOrderhist(res.data.getOrders)
            }else{
                console.log(res);
            }
        } catch (error) {
            console.log(error);
            window.alert("error in getting orders history");
        }
    }
    // function to add orders to order history
    const addOderHistory = (orderlist)=>{
        if(orderlist){
            orderlist.map(async(oder)=>{
                const res= await axios.post("http://localhost:8080/api/ordershistory/addOrders" , {...oder} );
                if(!res?.data?.success){
                    console.log(res);
                    window.alert("error in adding order to order history")
                }
            })
        }
        console.log(orderlist);
    }

    // fucntion to delete the order from order history 
    const deleteOrder = async(id)=>{
        console.log("inside delete order");
        console.log(id);
        try {
            if(id){
                const res = await axios.delete(`http://localhost:8080/api/ordershistory/deleteOrder/${id}`);
                if(res?.data?.success){
                    window.alert("deleted successfully");
                    window.location.reload();
                }
            }
        } catch (error) {
            console.log(error);
            window.alert("error in deleting the order")
        }
    }
    useEffect(()=>{
        getorderhist();
    },[orderHist , deleteOrder]);
    return <orderHistoryContext.Provider value = {{name , orderHist , addOderHistory , deleteOrder}}> {props.children} </orderHistoryContext.Provider>
}

// creating custom context
const useOrderHistory=()=>{
    return useContext(orderHistoryContext)
}
export default OderHisVal
export {orderHistoryContext , useOrderHistory}