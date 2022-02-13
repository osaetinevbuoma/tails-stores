import IStore from "../../interface/IStore";

interface IStoreBox {
  store: IStore;
}

const StoreBox = ({ store }: IStoreBox): JSX.Element => {
 return (
   <div className="column is-one-third">
     <div className="box">
       <div className="title is-4">{store.name}</div>
       <div className="subtitle">{store.postcode}</div>
     </div>
   </div>
 );
};

export default StoreBox;
