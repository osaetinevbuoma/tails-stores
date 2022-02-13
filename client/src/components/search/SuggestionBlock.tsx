import { MouseEvent } from "react";
import IStore from "../../interface/IStore";

interface ISuggestionBlock {
  store: IStore;
  handleSuggestionClick: Function;
}

const SuggestionBlock = ({ store, handleSuggestionClick }: ISuggestionBlock): JSX.Element => {
  const selectSuggestion = (e: MouseEvent<HTMLAnchorElement>, store: IStore): void => {
    e.preventDefault();
    handleSuggestionClick(store.name);
  };

  return (
    <a className="panel-block" href="# " onClick={(e) => selectSuggestion(e, store)}>
      <span className="panel-icon">
        <i className="fas fa-store" aria-hidden="true"></i>
      </span>
      {store.name}
    </a>
  );
};

export default SuggestionBlock;
