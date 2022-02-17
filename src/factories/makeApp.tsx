import React from "react";
import App from "../pages/App";
import { listItems } from '../factories'

export const makeApp = (): React.ReactElement => {
  return <App listItems={listItems}/>
}