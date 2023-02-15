import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useNav_Flex1Cb, useDiv4Cb, usenav_linksCb, usenav_linkCb, useDiv6Cb, useFlex4Cb, useFlex6Cb, useheroSectionCol2Cb, useheroSectionCol1Cb, useheroSectionBtnsCb, usebrandsCb, usebrandsLogoCb, usebrowseMenuCb, useDiv25Cb, useFlex8Cb, useDiv27Cb, usemenu1Cb, useDiv35Cb, useDiv28Cb, useFlex10Cb, useDiv36Cb, useDiv31Cb, useFlex11Cb, useDiv37Cb, useDiv34Cb, useFlex12Cb, useDiv38Cb, useDiv26Cb, useaboutUsFlexCb, useDiv40Cb, useDiv46Cb, useDiv47Cb, useFlex16Cb, useFlex17Cb, useFlex18Cb, useDiv41Cb, useFlex14Cb, useDiv44Cb, useDiv49Cb, useDiv52Cb, useDiv53Cb, useFlex19Cb, useFlex20Cb, useFlex27Cb, useFlex28Cb, useFlex29Cb, useFlex34Cb, useFlex30Cb, useFlex31Cb, useFlex32Cb, useFlex33Cb, useFlex39Cb, useFlex43Cb, useDiv67Cb, useFlex46Cb, useFlex47Cb, useDiv69Cb, useDiv116Cb, useFlex86Cb, useDiv117Cb, useDiv132Cb, useFlex93Cb, useDiv128Cb, useFlex91Cb, useDiv133Cb, useDiv137Cb, useDiv129Cb, useFlex94Cb, useDiv136Cb, useDiv161Cb, useFlex125Cb, useDiv163Cb, useDiv164Cb, useFlex123Cb, useFlex124Cb, useFlex121Cb, useDiv162Cb, useFlex122Cb, useDiv165Cb, useFlex126Cb, useDiv166Cb, useDiv169Cb, useFlex130Cb, useFlex131Cb, useFlex132Cb, useDiv167Cb, useFlex133Cb, useDiv171Cb, useFlex134Cb, useFlex143Cb, useDiv180Cb, useFlex146Cb, useDiv186Cb, useDiv187Cb, useFlex147Cb, useDiv188Cb, useDiv189Cb, useFlex149Cb, useDiv192Cb, useDiv193Cb, useDiv203Cb, useFlex154Cb, useDiv204Cb, useFlex155Cb, useFlex156Cb, useFlex157Cb, useDiv206Cb, useDiv205Cb, useFlex160Cb, useFlex162Cb, useFlex163Cb, useDiv208Cb, useFlex166Cb, useFlex168Cb, useDiv209Cb, useFlex171Cb, useFlex173Cb, useFlex175Cb, useDiv210Cb, useFlex178Cb, useDiv212Cb, useFlex177Cb, useDiv211Cb, useFlex176Cb, useFlex45Cb, useImage1Cb, usenavlink_homeCb, usenavlink_aboutCb, usenavlink_menuCb, usenavlink_pagesCb, useLink22Cb, usenavlink_cartCb, usenav_btn2Cb, usenav_btn1Cb, useheroSectionCol2ImgCb, useheroSectionText1Cb, useheroSectionText2Cb, useheroSectionText3Cb, useheroSectionBtn2Cb, useheroSectionBtn1Cb, usebrandsHeadingCb, usebrand1Cb, usebrand2Cb, usebrand3Cb, usebrand4Cb, useTextBox19Cb, useImage7Cb, useTextBox20Cb, useTextBox21Cb, useTextBox23Cb, useTextBox25Cb, useTextBox26Cb, useImage8Cb, useTextBox24Cb, useTextBox28Cb, useTextBox29Cb, useImage9Cb, useTextBox27Cb, useTextBox31Cb, useTextBox32Cb, useImage10Cb, useTextBox30Cb, useButton9Cb, useButton11Cb, useImage11Cb, useTextBox41Cb, useImage13Cb, useTextBox42Cb, useTextBox43Cb, useImage14Cb, useTextBox44Cb, useImage15Cb, useTextBox36Cb, useTextBox37Cb, useTextBox38Cb, useButton15Cb, useButton16Cb, useTextBox47Cb, useTextBox50Cb, useImage17Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb, useImage24Cb, useTextBox79Cb, useTextBox80Cb, useTextBox81Cb, useImage25Cb, useTextBox82Cb, useTextBox83Cb, useTextBox84Cb, useImage26Cb, useImage27Cb, useTextBox85Cb, useTextBox86Cb, useTextBox87Cb, useImage28Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useImage29Cb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useTextBox94Cb, useTextBox95Cb, useTextBox96Cb, useImage30Cb, useButton17Cb, useButton18Cb, useDiv65Cb, useImage36Cb, useTextBox109Cb, useTextBox110Cb, useButton21Cb, useButton22Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useImage94Cb, useTextBox182Cb, useTextBox204Cb, useTextBox205Cb, useTextBox206Cb, useImage104Cb, useTextBox213Cb, useTextBox214Cb, useImage108Cb, useImage102Cb, useTextBox200Cb, useTextBox201Cb, useTextBox211Cb, useTextBox212Cb, useImage107Cb, useImage155Cb, useTextBox261Cb, useTextBox262Cb, useButton37Cb, useButton38Cb, useTextBox259Cb, useTextBox260Cb, useImage149Cb, useTextBox257Cb, useTextBox258Cb, useImage150Cb, useImage151Cb, useImage152Cb, useImage153Cb, useImage154Cb, useImage156Cb, useTextBox270Cb, useTextBox271Cb, useImage160Cb, useTextBox267Cb, useImage161Cb, useTextBox268Cb, useTextBox269Cb, useImage162Cb, useTextBox274Cb, useButton40Cb, useInput17Cb, useTextBox280Cb, useInput9Cb, useInput10Cb, useTextBox281Cb, useTextBox282Cb, useInput11Cb, useInput12Cb, useTextBox283Cb, useTextBox286Cb, useInput15Cb, useInput16Cb, useTextBox287Cb, useTextBox288Cb, useButton41Cb, useImage166Cb, useImage167Cb, useImage172Cb, useImage173Cb, useImage176Cb, useImage177Cb, useImage178Cb, useTextBox290Cb, useImage179Cb, useImage180Cb, useImage181Cb, useImage182Cb, useImage183Cb, useTextBox292Cb, useTextBox296Cb, useTextBox304Cb, useTextBox305Cb, useTextBox306Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox313Cb, useTextBox315Cb, useTextBox316Cb, useTextBox317Cb, useTextBox318Cb, useTextBox319Cb, useImage186Cb, useImage187Cb, useImage184Cb, useImage185Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Nav_Flex1Props = useStore((state)=>state["Home"]["Nav_Flex1"]);
const Nav_Flex1IoProps = useIoStore((state)=>state["Home"]["Nav_Flex1"]);
const Nav_Flex1Cb = useNav_Flex1Cb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const nav_linksProps = useStore((state)=>state["Home"]["nav_links"]);
const nav_linksIoProps = useIoStore((state)=>state["Home"]["nav_links"]);
const nav_linksCb = usenav_linksCb()
const nav_linkProps = useStore((state)=>state["Home"]["nav_link"]);
const nav_linkIoProps = useIoStore((state)=>state["Home"]["nav_link"]);
const nav_linkCb = usenav_linkCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const heroSectionCol2Props = useStore((state)=>state["Home"]["heroSectionCol2"]);
const heroSectionCol2IoProps = useIoStore((state)=>state["Home"]["heroSectionCol2"]);
const heroSectionCol2Cb = useheroSectionCol2Cb()
const heroSectionCol1Props = useStore((state)=>state["Home"]["heroSectionCol1"]);
const heroSectionCol1IoProps = useIoStore((state)=>state["Home"]["heroSectionCol1"]);
const heroSectionCol1Cb = useheroSectionCol1Cb()
const heroSectionBtnsProps = useStore((state)=>state["Home"]["heroSectionBtns"]);
const heroSectionBtnsIoProps = useIoStore((state)=>state["Home"]["heroSectionBtns"]);
const heroSectionBtnsCb = useheroSectionBtnsCb()
const brandsProps = useStore((state)=>state["Home"]["brands"]);
const brandsIoProps = useIoStore((state)=>state["Home"]["brands"]);
const brandsCb = usebrandsCb()
const brandsLogoProps = useStore((state)=>state["Home"]["brandsLogo"]);
const brandsLogoIoProps = useIoStore((state)=>state["Home"]["brandsLogo"]);
const brandsLogoCb = usebrandsLogoCb()
const browseMenuProps = useStore((state)=>state["Home"]["browseMenu"]);
const browseMenuIoProps = useIoStore((state)=>state["Home"]["browseMenu"]);
const browseMenuCb = usebrowseMenuCb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const menu1Props = useStore((state)=>state["Home"]["menu1"]);
const menu1IoProps = useIoStore((state)=>state["Home"]["menu1"]);
const menu1Cb = usemenu1Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const aboutUsFlexProps = useStore((state)=>state["Home"]["aboutUsFlex"]);
const aboutUsFlexIoProps = useIoStore((state)=>state["Home"]["aboutUsFlex"]);
const aboutUsFlexCb = useaboutUsFlexCb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div46Props = useStore((state)=>state["Home"]["Div46"]);
const Div46IoProps = useIoStore((state)=>state["Home"]["Div46"]);
const Div46Cb = useDiv46Cb()
const Div47Props = useStore((state)=>state["Home"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["Home"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Div41Props = useStore((state)=>state["Home"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Home"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const Div49Props = useStore((state)=>state["Home"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["Home"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Div52Props = useStore((state)=>state["Home"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["Home"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div117Props = useStore((state)=>state["Home"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["Home"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Div132Props = useStore((state)=>state["Home"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["Home"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Div128Props = useStore((state)=>state["Home"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["Home"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Div133Props = useStore((state)=>state["Home"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["Home"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div137Props = useStore((state)=>state["Home"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["Home"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Div129Props = useStore((state)=>state["Home"]["Div129"]);
const Div129IoProps = useIoStore((state)=>state["Home"]["Div129"]);
const Div129Cb = useDiv129Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Div136Props = useStore((state)=>state["Home"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["Home"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Div161Props = useStore((state)=>state["Home"]["Div161"]);
const Div161IoProps = useIoStore((state)=>state["Home"]["Div161"]);
const Div161Cb = useDiv161Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Div163Props = useStore((state)=>state["Home"]["Div163"]);
const Div163IoProps = useIoStore((state)=>state["Home"]["Div163"]);
const Div163Cb = useDiv163Cb()
const Div164Props = useStore((state)=>state["Home"]["Div164"]);
const Div164IoProps = useIoStore((state)=>state["Home"]["Div164"]);
const Div164Cb = useDiv164Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Div162Props = useStore((state)=>state["Home"]["Div162"]);
const Div162IoProps = useIoStore((state)=>state["Home"]["Div162"]);
const Div162Cb = useDiv162Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Div165Props = useStore((state)=>state["Home"]["Div165"]);
const Div165IoProps = useIoStore((state)=>state["Home"]["Div165"]);
const Div165Cb = useDiv165Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Div166Props = useStore((state)=>state["Home"]["Div166"]);
const Div166IoProps = useIoStore((state)=>state["Home"]["Div166"]);
const Div166Cb = useDiv166Cb()
const Div169Props = useStore((state)=>state["Home"]["Div169"]);
const Div169IoProps = useIoStore((state)=>state["Home"]["Div169"]);
const Div169Cb = useDiv169Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Div167Props = useStore((state)=>state["Home"]["Div167"]);
const Div167IoProps = useIoStore((state)=>state["Home"]["Div167"]);
const Div167Cb = useDiv167Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Div171Props = useStore((state)=>state["Home"]["Div171"]);
const Div171IoProps = useIoStore((state)=>state["Home"]["Div171"]);
const Div171Cb = useDiv171Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Div180Props = useStore((state)=>state["Home"]["Div180"]);
const Div180IoProps = useIoStore((state)=>state["Home"]["Div180"]);
const Div180Cb = useDiv180Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div186Props = useStore((state)=>state["Home"]["Div186"]);
const Div186IoProps = useIoStore((state)=>state["Home"]["Div186"]);
const Div186Cb = useDiv186Cb()
const Div187Props = useStore((state)=>state["Home"]["Div187"]);
const Div187IoProps = useIoStore((state)=>state["Home"]["Div187"]);
const Div187Cb = useDiv187Cb()
const Flex147Props = useStore((state)=>state["Home"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Home"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Div188Props = useStore((state)=>state["Home"]["Div188"]);
const Div188IoProps = useIoStore((state)=>state["Home"]["Div188"]);
const Div188Cb = useDiv188Cb()
const Div189Props = useStore((state)=>state["Home"]["Div189"]);
const Div189IoProps = useIoStore((state)=>state["Home"]["Div189"]);
const Div189Cb = useDiv189Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Div192Props = useStore((state)=>state["Home"]["Div192"]);
const Div192IoProps = useIoStore((state)=>state["Home"]["Div192"]);
const Div192Cb = useDiv192Cb()
const Div193Props = useStore((state)=>state["Home"]["Div193"]);
const Div193IoProps = useIoStore((state)=>state["Home"]["Div193"]);
const Div193Cb = useDiv193Cb()
const Div203Props = useStore((state)=>state["Home"]["Div203"]);
const Div203IoProps = useIoStore((state)=>state["Home"]["Div203"]);
const Div203Cb = useDiv203Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Div204Props = useStore((state)=>state["Home"]["Div204"]);
const Div204IoProps = useIoStore((state)=>state["Home"]["Div204"]);
const Div204Cb = useDiv204Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Div206Props = useStore((state)=>state["Home"]["Div206"]);
const Div206IoProps = useIoStore((state)=>state["Home"]["Div206"]);
const Div206Cb = useDiv206Cb()
const Div205Props = useStore((state)=>state["Home"]["Div205"]);
const Div205IoProps = useIoStore((state)=>state["Home"]["Div205"]);
const Div205Cb = useDiv205Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Div208Props = useStore((state)=>state["Home"]["Div208"]);
const Div208IoProps = useIoStore((state)=>state["Home"]["Div208"]);
const Div208Cb = useDiv208Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Div209Props = useStore((state)=>state["Home"]["Div209"]);
const Div209IoProps = useIoStore((state)=>state["Home"]["Div209"]);
const Div209Cb = useDiv209Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Div210Props = useStore((state)=>state["Home"]["Div210"]);
const Div210IoProps = useIoStore((state)=>state["Home"]["Div210"]);
const Div210Cb = useDiv210Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Div212Props = useStore((state)=>state["Home"]["Div212"]);
const Div212IoProps = useIoStore((state)=>state["Home"]["Div212"]);
const Div212Cb = useDiv212Cb()
const Flex177Props = useStore((state)=>state["Home"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Home"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Div211Props = useStore((state)=>state["Home"]["Div211"]);
const Div211IoProps = useIoStore((state)=>state["Home"]["Div211"]);
const Div211Cb = useDiv211Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const navlink_homeProps = useStore((state)=>state["Home"]["navlink_home"]);
const navlink_homeIoProps = useIoStore((state)=>state["Home"]["navlink_home"]);
const navlink_homeCb = usenavlink_homeCb()
const navlink_aboutProps = useStore((state)=>state["Home"]["navlink_about"]);
const navlink_aboutIoProps = useIoStore((state)=>state["Home"]["navlink_about"]);
const navlink_aboutCb = usenavlink_aboutCb()
const navlink_menuProps = useStore((state)=>state["Home"]["navlink_menu"]);
const navlink_menuIoProps = useIoStore((state)=>state["Home"]["navlink_menu"]);
const navlink_menuCb = usenavlink_menuCb()
const navlink_pagesProps = useStore((state)=>state["Home"]["navlink_pages"]);
const navlink_pagesIoProps = useIoStore((state)=>state["Home"]["navlink_pages"]);
const navlink_pagesCb = usenavlink_pagesCb()
const Link22Props = useStore((state)=>state["Home"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["Home"]["Link22"]);
const Link22Cb = useLink22Cb()
const navlink_cartProps = useStore((state)=>state["Home"]["navlink_cart"]);
const navlink_cartIoProps = useIoStore((state)=>state["Home"]["navlink_cart"]);
const navlink_cartCb = usenavlink_cartCb()
const nav_btn2Props = useStore((state)=>state["Home"]["nav_btn2"]);
const nav_btn2IoProps = useIoStore((state)=>state["Home"]["nav_btn2"]);
const nav_btn2Cb = usenav_btn2Cb()
const nav_btn1Props = useStore((state)=>state["Home"]["nav_btn1"]);
const nav_btn1IoProps = useIoStore((state)=>state["Home"]["nav_btn1"]);
const nav_btn1Cb = usenav_btn1Cb()
const heroSectionCol2ImgProps = useStore((state)=>state["Home"]["heroSectionCol2Img"]);
const heroSectionCol2ImgIoProps = useIoStore((state)=>state["Home"]["heroSectionCol2Img"]);
const heroSectionCol2ImgCb = useheroSectionCol2ImgCb()
const heroSectionText1Props = useStore((state)=>state["Home"]["heroSectionText1"]);
const heroSectionText1IoProps = useIoStore((state)=>state["Home"]["heroSectionText1"]);
const heroSectionText1Cb = useheroSectionText1Cb()
const heroSectionText2Props = useStore((state)=>state["Home"]["heroSectionText2"]);
const heroSectionText2IoProps = useIoStore((state)=>state["Home"]["heroSectionText2"]);
const heroSectionText2Cb = useheroSectionText2Cb()
const heroSectionText3Props = useStore((state)=>state["Home"]["heroSectionText3"]);
const heroSectionText3IoProps = useIoStore((state)=>state["Home"]["heroSectionText3"]);
const heroSectionText3Cb = useheroSectionText3Cb()
const heroSectionBtn2Props = useStore((state)=>state["Home"]["heroSectionBtn2"]);
const heroSectionBtn2IoProps = useIoStore((state)=>state["Home"]["heroSectionBtn2"]);
const heroSectionBtn2Cb = useheroSectionBtn2Cb()
const heroSectionBtn1Props = useStore((state)=>state["Home"]["heroSectionBtn1"]);
const heroSectionBtn1IoProps = useIoStore((state)=>state["Home"]["heroSectionBtn1"]);
const heroSectionBtn1Cb = useheroSectionBtn1Cb()
const brandsHeadingProps = useStore((state)=>state["Home"]["brandsHeading"]);
const brandsHeadingIoProps = useIoStore((state)=>state["Home"]["brandsHeading"]);
const brandsHeadingCb = usebrandsHeadingCb()
const brand1Props = useStore((state)=>state["Home"]["brand1"]);
const brand1IoProps = useIoStore((state)=>state["Home"]["brand1"]);
const brand1Cb = usebrand1Cb()
const brand2Props = useStore((state)=>state["Home"]["brand2"]);
const brand2IoProps = useIoStore((state)=>state["Home"]["brand2"]);
const brand2Cb = usebrand2Cb()
const brand3Props = useStore((state)=>state["Home"]["brand3"]);
const brand3IoProps = useIoStore((state)=>state["Home"]["brand3"]);
const brand3Cb = usebrand3Cb()
const brand4Props = useStore((state)=>state["Home"]["brand4"]);
const brand4IoProps = useIoStore((state)=>state["Home"]["brand4"]);
const brand4Cb = usebrand4Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const Div65Props = useStore((state)=>state["Home"]["Div65"]);
const Div65IoProps = useIoStore((state)=>state["Home"]["Div65"]);
const Div65Cb = useDiv65Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox204Props = useStore((state)=>state["Home"]["TextBox204"]);
const TextBox204IoProps = useIoStore((state)=>state["Home"]["TextBox204"]);
const TextBox204Cb = useTextBox204Cb()
const TextBox205Props = useStore((state)=>state["Home"]["TextBox205"]);
const TextBox205IoProps = useIoStore((state)=>state["Home"]["TextBox205"]);
const TextBox205Cb = useTextBox205Cb()
const TextBox206Props = useStore((state)=>state["Home"]["TextBox206"]);
const TextBox206IoProps = useIoStore((state)=>state["Home"]["TextBox206"]);
const TextBox206Cb = useTextBox206Cb()
const Image104Props = useStore((state)=>state["Home"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Home"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox213Props = useStore((state)=>state["Home"]["TextBox213"]);
const TextBox213IoProps = useIoStore((state)=>state["Home"]["TextBox213"]);
const TextBox213Cb = useTextBox213Cb()
const TextBox214Props = useStore((state)=>state["Home"]["TextBox214"]);
const TextBox214IoProps = useIoStore((state)=>state["Home"]["TextBox214"]);
const TextBox214Cb = useTextBox214Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const Image102Props = useStore((state)=>state["Home"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["Home"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox200Props = useStore((state)=>state["Home"]["TextBox200"]);
const TextBox200IoProps = useIoStore((state)=>state["Home"]["TextBox200"]);
const TextBox200Cb = useTextBox200Cb()
const TextBox201Props = useStore((state)=>state["Home"]["TextBox201"]);
const TextBox201IoProps = useIoStore((state)=>state["Home"]["TextBox201"]);
const TextBox201Cb = useTextBox201Cb()
const TextBox211Props = useStore((state)=>state["Home"]["TextBox211"]);
const TextBox211IoProps = useIoStore((state)=>state["Home"]["TextBox211"]);
const TextBox211Cb = useTextBox211Cb()
const TextBox212Props = useStore((state)=>state["Home"]["TextBox212"]);
const TextBox212IoProps = useIoStore((state)=>state["Home"]["TextBox212"]);
const TextBox212Cb = useTextBox212Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const Image155Props = useStore((state)=>state["Home"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["Home"]["Image155"]);
const Image155Cb = useImage155Cb()
const TextBox261Props = useStore((state)=>state["Home"]["TextBox261"]);
const TextBox261IoProps = useIoStore((state)=>state["Home"]["TextBox261"]);
const TextBox261Cb = useTextBox261Cb()
const TextBox262Props = useStore((state)=>state["Home"]["TextBox262"]);
const TextBox262IoProps = useIoStore((state)=>state["Home"]["TextBox262"]);
const TextBox262Cb = useTextBox262Cb()
const Button37Props = useStore((state)=>state["Home"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["Home"]["Button37"]);
const Button37Cb = useButton37Cb()
const Button38Props = useStore((state)=>state["Home"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["Home"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox259Props = useStore((state)=>state["Home"]["TextBox259"]);
const TextBox259IoProps = useIoStore((state)=>state["Home"]["TextBox259"]);
const TextBox259Cb = useTextBox259Cb()
const TextBox260Props = useStore((state)=>state["Home"]["TextBox260"]);
const TextBox260IoProps = useIoStore((state)=>state["Home"]["TextBox260"]);
const TextBox260Cb = useTextBox260Cb()
const Image149Props = useStore((state)=>state["Home"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["Home"]["Image149"]);
const Image149Cb = useImage149Cb()
const TextBox257Props = useStore((state)=>state["Home"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["Home"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const TextBox258Props = useStore((state)=>state["Home"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["Home"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const Image150Props = useStore((state)=>state["Home"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["Home"]["Image150"]);
const Image150Cb = useImage150Cb()
const Image151Props = useStore((state)=>state["Home"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["Home"]["Image151"]);
const Image151Cb = useImage151Cb()
const Image152Props = useStore((state)=>state["Home"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["Home"]["Image152"]);
const Image152Cb = useImage152Cb()
const Image153Props = useStore((state)=>state["Home"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Home"]["Image153"]);
const Image153Cb = useImage153Cb()
const Image154Props = useStore((state)=>state["Home"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Home"]["Image154"]);
const Image154Cb = useImage154Cb()
const Image156Props = useStore((state)=>state["Home"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["Home"]["Image156"]);
const Image156Cb = useImage156Cb()
const TextBox270Props = useStore((state)=>state["Home"]["TextBox270"]);
const TextBox270IoProps = useIoStore((state)=>state["Home"]["TextBox270"]);
const TextBox270Cb = useTextBox270Cb()
const TextBox271Props = useStore((state)=>state["Home"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["Home"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const Image160Props = useStore((state)=>state["Home"]["Image160"]);
const Image160IoProps = useIoStore((state)=>state["Home"]["Image160"]);
const Image160Cb = useImage160Cb()
const TextBox267Props = useStore((state)=>state["Home"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["Home"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const Image161Props = useStore((state)=>state["Home"]["Image161"]);
const Image161IoProps = useIoStore((state)=>state["Home"]["Image161"]);
const Image161Cb = useImage161Cb()
const TextBox268Props = useStore((state)=>state["Home"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["Home"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const TextBox269Props = useStore((state)=>state["Home"]["TextBox269"]);
const TextBox269IoProps = useIoStore((state)=>state["Home"]["TextBox269"]);
const TextBox269Cb = useTextBox269Cb()
const Image162Props = useStore((state)=>state["Home"]["Image162"]);
const Image162IoProps = useIoStore((state)=>state["Home"]["Image162"]);
const Image162Cb = useImage162Cb()
const TextBox274Props = useStore((state)=>state["Home"]["TextBox274"]);
const TextBox274IoProps = useIoStore((state)=>state["Home"]["TextBox274"]);
const TextBox274Cb = useTextBox274Cb()
const Button40Props = useStore((state)=>state["Home"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["Home"]["Button40"]);
const Button40Cb = useButton40Cb()
const Input17Props = useStore((state)=>state["Home"]["Input17"]);
const Input17IoProps = useIoStore((state)=>state["Home"]["Input17"]);
const Input17Cb = useInput17Cb()
const TextBox280Props = useStore((state)=>state["Home"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["Home"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const Input9Props = useStore((state)=>state["Home"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["Home"]["Input9"]);
const Input9Cb = useInput9Cb()
const Input10Props = useStore((state)=>state["Home"]["Input10"]);
const Input10IoProps = useIoStore((state)=>state["Home"]["Input10"]);
const Input10Cb = useInput10Cb()
const TextBox281Props = useStore((state)=>state["Home"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["Home"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox282Props = useStore((state)=>state["Home"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["Home"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const Input11Props = useStore((state)=>state["Home"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["Home"]["Input11"]);
const Input11Cb = useInput11Cb()
const Input12Props = useStore((state)=>state["Home"]["Input12"]);
const Input12IoProps = useIoStore((state)=>state["Home"]["Input12"]);
const Input12Cb = useInput12Cb()
const TextBox283Props = useStore((state)=>state["Home"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["Home"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const TextBox286Props = useStore((state)=>state["Home"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["Home"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const Input15Props = useStore((state)=>state["Home"]["Input15"]);
const Input15IoProps = useIoStore((state)=>state["Home"]["Input15"]);
const Input15Cb = useInput15Cb()
const Input16Props = useStore((state)=>state["Home"]["Input16"]);
const Input16IoProps = useIoStore((state)=>state["Home"]["Input16"]);
const Input16Cb = useInput16Cb()
const TextBox287Props = useStore((state)=>state["Home"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["Home"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()
const TextBox288Props = useStore((state)=>state["Home"]["TextBox288"]);
const TextBox288IoProps = useIoStore((state)=>state["Home"]["TextBox288"]);
const TextBox288Cb = useTextBox288Cb()
const Button41Props = useStore((state)=>state["Home"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["Home"]["Button41"]);
const Button41Cb = useButton41Cb()
const Image166Props = useStore((state)=>state["Home"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["Home"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image167Props = useStore((state)=>state["Home"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["Home"]["Image167"]);
const Image167Cb = useImage167Cb()
const Image172Props = useStore((state)=>state["Home"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["Home"]["Image172"]);
const Image172Cb = useImage172Cb()
const Image173Props = useStore((state)=>state["Home"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Home"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image176Props = useStore((state)=>state["Home"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["Home"]["Image176"]);
const Image176Cb = useImage176Cb()
const Image177Props = useStore((state)=>state["Home"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["Home"]["Image177"]);
const Image177Cb = useImage177Cb()
const Image178Props = useStore((state)=>state["Home"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["Home"]["Image178"]);
const Image178Cb = useImage178Cb()
const TextBox290Props = useStore((state)=>state["Home"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["Home"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const Image179Props = useStore((state)=>state["Home"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["Home"]["Image179"]);
const Image179Cb = useImage179Cb()
const Image180Props = useStore((state)=>state["Home"]["Image180"]);
const Image180IoProps = useIoStore((state)=>state["Home"]["Image180"]);
const Image180Cb = useImage180Cb()
const Image181Props = useStore((state)=>state["Home"]["Image181"]);
const Image181IoProps = useIoStore((state)=>state["Home"]["Image181"]);
const Image181Cb = useImage181Cb()
const Image182Props = useStore((state)=>state["Home"]["Image182"]);
const Image182IoProps = useIoStore((state)=>state["Home"]["Image182"]);
const Image182Cb = useImage182Cb()
const Image183Props = useStore((state)=>state["Home"]["Image183"]);
const Image183IoProps = useIoStore((state)=>state["Home"]["Image183"]);
const Image183Cb = useImage183Cb()
const TextBox292Props = useStore((state)=>state["Home"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["Home"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox296Props = useStore((state)=>state["Home"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["Home"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox304Props = useStore((state)=>state["Home"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["Home"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["Home"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["Home"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox306Props = useStore((state)=>state["Home"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["Home"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const TextBox307Props = useStore((state)=>state["Home"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["Home"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["Home"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["Home"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["Home"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["Home"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["Home"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["Home"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["Home"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["Home"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["Home"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["Home"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox313Props = useStore((state)=>state["Home"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["Home"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox315Props = useStore((state)=>state["Home"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["Home"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["Home"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["Home"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox317Props = useStore((state)=>state["Home"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["Home"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox318Props = useStore((state)=>state["Home"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["Home"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const TextBox319Props = useStore((state)=>state["Home"]["TextBox319"]);
const TextBox319IoProps = useIoStore((state)=>state["Home"]["TextBox319"]);
const TextBox319Cb = useTextBox319Cb()
const Image186Props = useStore((state)=>state["Home"]["Image186"]);
const Image186IoProps = useIoStore((state)=>state["Home"]["Image186"]);
const Image186Cb = useImage186Cb()
const Image187Props = useStore((state)=>state["Home"]["Image187"]);
const Image187IoProps = useIoStore((state)=>state["Home"]["Image187"]);
const Image187Cb = useImage187Cb()
const Image184Props = useStore((state)=>state["Home"]["Image184"]);
const Image184IoProps = useIoStore((state)=>state["Home"]["Image184"]);
const Image184Cb = useImage184Cb()
const Image185Props = useStore((state)=>state["Home"]["Image185"]);
const Image185IoProps = useIoStore((state)=>state["Home"]["Image185"]);
const Image185Cb = useImage185Cb()

  return (<>
  <Flex className="p-Home Nav_Flex1 bpt" {...Nav_Flex1Props} {...Nav_Flex1Cb} {...Nav_Flex1IoProps}>
<Div className="p-Home Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
<Div className="p-Home nav_links bpt" {...nav_linksProps} {...nav_linksCb} {...nav_linksIoProps}>
<Flex className="p-Home nav_link bpt" {...nav_linkProps} {...nav_linkCb} {...nav_linkIoProps}>
<Link className="p-Home navlink_home bpt" {...navlink_homeProps} {...navlink_homeCb} {...navlink_homeIoProps}/>
<Link className="p-Home navlink_about bpt" {...navlink_aboutProps} {...navlink_aboutCb} {...navlink_aboutIoProps}/>
<Link className="p-Home navlink_menu bpt" {...navlink_menuProps} {...navlink_menuCb} {...navlink_menuIoProps}/>
<Link className="p-Home navlink_pages bpt" {...navlink_pagesProps} {...navlink_pagesCb} {...navlink_pagesIoProps}/>
<Link className="p-Home Link22 bpt" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
<Link className="p-Home navlink_cart bpt" {...navlink_cartProps} {...navlink_cartCb} {...navlink_cartIoProps}/>
</Flex>
</Div>
<Div className="p-Home Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Button className="p-Home nav_btn1 bpt" {...nav_btn1Props} {...nav_btn1Cb} {...nav_btn1IoProps}/>
<Button className="p-Home nav_btn2 bpt" {...nav_btn2Props} {...nav_btn2Cb} {...nav_btn2IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Flex className="p-Home heroSectionCol1 bpt" {...heroSectionCol1Props} {...heroSectionCol1Cb} {...heroSectionCol1IoProps}>
<TextBox className="p-Home heroSectionText1 bpt" {...heroSectionText1Props} {...heroSectionText1Cb} {...heroSectionText1IoProps}/>
<TextBox className="p-Home heroSectionText2 bpt" {...heroSectionText2Props} {...heroSectionText2Cb} {...heroSectionText2IoProps}/>
<TextBox className="p-Home heroSectionText3 bpt" {...heroSectionText3Props} {...heroSectionText3Cb} {...heroSectionText3IoProps}/>
<Div className="p-Home heroSectionBtns bpt" {...heroSectionBtnsProps} {...heroSectionBtnsCb} {...heroSectionBtnsIoProps}>
<Button className="p-Home heroSectionBtn1 bpt" {...heroSectionBtn1Props} {...heroSectionBtn1Cb} {...heroSectionBtn1IoProps}/>
<Button className="p-Home heroSectionBtn2 bpt" {...heroSectionBtn2Props} {...heroSectionBtn2Cb} {...heroSectionBtn2IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Div className="p-Home heroSectionCol2 bpt" {...heroSectionCol2Props} {...heroSectionCol2Cb} {...heroSectionCol2IoProps}>
<Image className="p-Home heroSectionCol2Img bpt" {...heroSectionCol2ImgProps} {...heroSectionCol2ImgCb} {...heroSectionCol2ImgIoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home brands bpt" {...brandsProps} {...brandsCb} {...brandsIoProps}>
<TextBox className="p-Home brandsHeading bpt" {...brandsHeadingProps} {...brandsHeadingCb} {...brandsHeadingIoProps}/>
<Flex className="p-Home brandsLogo bpt" {...brandsLogoProps} {...brandsLogoCb} {...brandsLogoIoProps}>
<Image className="p-Home brand1 bpt" {...brand1Props} {...brand1Cb} {...brand1IoProps}/>
<Image className="p-Home brand2 bpt" {...brand2Props} {...brand2Cb} {...brand2IoProps}/>
<Image className="p-Home brand3 bpt" {...brand3Props} {...brand3Cb} {...brand3IoProps}/>
<Image className="p-Home brand4 bpt" {...brand4Props} {...brand4Cb} {...brand4IoProps}/>
</Flex>
</Div>
<Div className="p-Home browseMenu bpt" {...browseMenuProps} {...browseMenuCb} {...browseMenuIoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<Flex className="p-Home menu1 bpt" {...menu1Props} {...menu1Cb} {...menu1IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Div>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Div>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Div>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Div>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Div>
</Div>
<Flex className="p-Home aboutUsFlex bpt" {...aboutUsFlexProps} {...aboutUsFlexCb} {...aboutUsFlexIoProps}>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Div className="p-Home Div46 bpt" {...Div46Props} {...Div46Cb} {...Div46IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Div className="p-Home Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<Div className="p-Home Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Div>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
</Flex>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Div className="p-Home Div65 bpt" {...Div65Props} {...Div65Cb} {...Div65IoProps}/>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Div>
</Flex>
</Div>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}/>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home Div161 bpt" {...Div161Props} {...Div161Cb} {...Div161IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Div className="p-Home Div165 bpt" {...Div165Props} {...Div165Cb} {...Div165IoProps}>
<Image className="p-Home Image156 bpt" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
</Div>
<Div className="p-Home Div164 bpt" {...Div164Props} {...Div164Cb} {...Div164IoProps}>
<TextBox className="p-Home TextBox262 bpt" {...TextBox262Props} {...TextBox262Cb} {...TextBox262IoProps}/>
<TextBox className="p-Home TextBox261 bpt" {...TextBox261Props} {...TextBox261Cb} {...TextBox261IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Image className="p-Home Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<Image className="p-Home Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<Image className="p-Home Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<Image className="p-Home Image151 bpt" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
<Image className="p-Home Image150 bpt" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
</Flex>
<TextBox className="p-Home TextBox260 bpt" {...TextBox260Props} {...TextBox260Cb} {...TextBox260IoProps}/>
<TextBox className="p-Home TextBox259 bpt" {...TextBox259Props} {...TextBox259Cb} {...TextBox259IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<Div className="p-Home Div162 bpt" {...Div162Props} {...Div162Cb} {...Div162IoProps}>
<TextBox className="p-Home TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<TextBox className="p-Home TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Button className="p-Home Button38 bpt" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
<Button className="p-Home Button37 bpt" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div163 bpt" {...Div163Props} {...Div163Cb} {...Div163IoProps}>
<Image className="p-Home Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Div className="p-Home Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Div>
<Div className="p-Home Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<TextBox className="p-Home TextBox204 bpt" {...TextBox204Props} {...TextBox204Cb} {...TextBox204IoProps}/>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Div className="p-Home Div129 bpt" {...Div129Props} {...Div129Cb} {...Div129IoProps}>
<Image className="p-Home Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<TextBox className="p-Home TextBox200 bpt" {...TextBox200Props} {...TextBox200Cb} {...TextBox200IoProps}/>
<TextBox className="p-Home TextBox201 bpt" {...TextBox201Props} {...TextBox201Cb} {...TextBox201IoProps}/>
</Div>
<Div className="p-Home Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Div className="p-Home Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<Image className="p-Home Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox className="p-Home TextBox206 bpt" {...TextBox206Props} {...TextBox206Cb} {...TextBox206IoProps}/>
<TextBox className="p-Home TextBox205 bpt" {...TextBox205Props} {...TextBox205Cb} {...TextBox205IoProps}/>
</Div>
</Flex>
<Div className="p-Home Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<Image className="p-Home Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<TextBox className="p-Home TextBox214 bpt" {...TextBox214Props} {...TextBox214Cb} {...TextBox214IoProps}/>
<TextBox className="p-Home TextBox213 bpt" {...TextBox213Props} {...TextBox213Cb} {...TextBox213IoProps}/>
</Div>
</Div>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Div className="p-Home Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox className="p-Home TextBox212 bpt" {...TextBox212Props} {...TextBox212Cb} {...TextBox212IoProps}/>
<TextBox className="p-Home TextBox211 bpt" {...TextBox211Props} {...TextBox211Cb} {...TextBox211IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Div className="p-Home Div166 bpt" {...Div166Props} {...Div166Cb} {...Div166IoProps}>
<Div className="p-Home Div169 bpt" {...Div169Props} {...Div169Cb} {...Div169IoProps}>
<TextBox className="p-Home TextBox270 bpt" {...TextBox270Props} {...TextBox270Cb} {...TextBox270IoProps}/>
<TextBox className="p-Home TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image162 bpt" {...Image162Props} {...Image162Cb} {...Image162IoProps}/>
<TextBox className="p-Home TextBox269 bpt" {...TextBox269Props} {...TextBox269Cb} {...TextBox269IoProps}/>
</Flex>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Image className="p-Home Image161 bpt" {...Image161Props} {...Image161Cb} {...Image161IoProps}/>
<TextBox className="p-Home TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
</Flex>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home Image160 bpt" {...Image160Props} {...Image160Cb} {...Image160IoProps}/>
<TextBox className="p-Home TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div167 bpt" {...Div167Props} {...Div167Cb} {...Div167IoProps}>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Div className="p-Home Div171 bpt" {...Div171Props} {...Div171Cb} {...Div171IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Div className="p-Home Div193 bpt" {...Div193Props} {...Div193Cb} {...Div193IoProps}>
<TextBox className="p-Home TextBox287 bpt" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<Input className="p-Home Input16 bpt" {...Input16Props} {...Input16Cb} {...Input16IoProps}/>
</Div>
<Div className="p-Home Div192 bpt" {...Div192Props} {...Div192Cb} {...Div192IoProps}>
<TextBox className="p-Home TextBox286 bpt" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
<Input className="p-Home Input15 bpt" {...Input15Props} {...Input15Cb} {...Input15IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Div className="p-Home Div187 bpt" {...Div187Props} {...Div187Cb} {...Div187IoProps}>
<TextBox className="p-Home TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
<Input className="p-Home Input10 bpt" {...Input10Props} {...Input10Cb} {...Input10IoProps}/>
</Div>
<Div className="p-Home Div186 bpt" {...Div186Props} {...Div186Cb} {...Div186IoProps}>
<TextBox className="p-Home TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<Input className="p-Home Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Div className="p-Home Div189 bpt" {...Div189Props} {...Div189Cb} {...Div189IoProps}>
<TextBox className="p-Home TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
<Input className="p-Home Input12 bpt" {...Input12Props} {...Input12Cb} {...Input12IoProps}/>
</Div>
<Div className="p-Home Div188 bpt" {...Div188Props} {...Div188Cb} {...Div188IoProps}>
<TextBox className="p-Home TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<Input className="p-Home Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Div className="p-Home Div180 bpt" {...Div180Props} {...Div180Cb} {...Div180IoProps}>
<TextBox className="p-Home TextBox274 bpt" {...TextBox274Props} {...TextBox274Cb} {...TextBox274IoProps}/>
<Input className="p-Home Input17 bpt" {...Input17Props} {...Input17Cb} {...Input17IoProps}/>
<Button className="p-Home Button40 bpt" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
<Div className="p-Home Div203 bpt" {...Div203Props} {...Div203Cb} {...Div203IoProps}>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<TextBox className="p-Home TextBox288 bpt" {...TextBox288Props} {...TextBox288Cb} {...TextBox288IoProps}/>
<Button className="p-Home Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
</Flex>
<Div className="p-Home Div204 bpt" {...Div204Props} {...Div204Cb} {...Div204IoProps}>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Image className="p-Home Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
<Image className="p-Home Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Flex>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Div className="p-Home Div206 bpt" {...Div206Props} {...Div206Cb} {...Div206IoProps}>
<Div className="p-Home Div205 bpt" {...Div205Props} {...Div205Cb} {...Div205IoProps}>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Image className="p-Home Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<Image className="p-Home Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<Image className="p-Home Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
<Image className="p-Home Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Div className="p-Home Div208 bpt" {...Div208Props} {...Div208Cb} {...Div208IoProps}>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Image className="p-Home Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
<TextBox className="p-Home TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image className="p-Home Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<Image className="p-Home Image180 bpt" {...Image180Props} {...Image180Cb} {...Image180IoProps}/>
<Image className="p-Home Image181 bpt" {...Image181Props} {...Image181Cb} {...Image181IoProps}/>
<Image className="p-Home Image182 bpt" {...Image182Props} {...Image182Cb} {...Image182IoProps}/>
<Image className="p-Home Image183 bpt" {...Image183Props} {...Image183Cb} {...Image183IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div209 bpt" {...Div209Props} {...Div209Cb} {...Div209IoProps}>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox292 bpt" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
<TextBox className="p-Home TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
<TextBox className="p-Home TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox className="p-Home TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
<TextBox className="p-Home TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
<TextBox className="p-Home TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox className="p-Home TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox className="p-Home TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
</Flex>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<TextBox className="p-Home TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox className="p-Home TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
<TextBox className="p-Home TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox className="p-Home TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<TextBox className="p-Home TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox className="p-Home TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
<TextBox className="p-Home TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
<TextBox className="p-Home TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div210 bpt" {...Div210Props} {...Div210Cb} {...Div210IoProps}>
<TextBox className="p-Home TextBox319 bpt" {...TextBox319Props} {...TextBox319Cb} {...TextBox319IoProps}/>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<Div className="p-Home Div212 bpt" {...Div212Props} {...Div212Cb} {...Div212IoProps}>
<Div className="p-Home Div211 bpt" {...Div211Props} {...Div211Cb} {...Div211IoProps}>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Image className="p-Home Image184 bpt" {...Image184Props} {...Image184Cb} {...Image184IoProps}/>
<Image className="p-Home Image185 bpt" {...Image185Props} {...Image185Cb} {...Image185IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<Image className="p-Home Image187 bpt" {...Image187Props} {...Image187Cb} {...Image187IoProps}/>
<Image className="p-Home Image186 bpt" {...Image186Props} {...Image186Cb} {...Image186IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
  </>);
}
