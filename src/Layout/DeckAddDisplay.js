import React from 'react'
import DeckAdd from "./DeckAdd";
import Breadcrumb from "./Breadcrumb";

function DeckAddDisplay(props) {
    const renderAddDeckDisplay  = (
        <div>
          <Breadcrumb crumbs={["Home", "Create Deck"]} />
          <h2>Create Deck</h2>
          <DeckAdd />
        </div>
      )
      return (
        <>{renderAddDeckDisplay}</>
      );
}

export default DeckAddDisplay
