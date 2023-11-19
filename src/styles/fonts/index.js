import { createGlobalStyle } from "styled-components";
import AgbalumoRegular from "./Agbalumo-Regular.ttf";
import IBMMedium from "./IBMPlexSansKR-Medium.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "AgbalumoRegular";
        src: url(${AgbalumoRegular}) format("truetype")
    }
    @font-face {
        font-family: "IBMMedium";
        src: url(${IBMMedium}) format("truetype")
    }
`;
