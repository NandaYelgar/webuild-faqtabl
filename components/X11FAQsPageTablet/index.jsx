import React from "react";
import Frame144 from "../Frame144";
import Footer52 from "../Footer52";
import Close from "../Close";
import Frame159032 from "../Frame159032";
import "./X11FAQsPageTablet.css";

function X11FAQsPageTablet(props) {
  const {
    faqs,
    rectangle76,
    text127,
    text128,
    frame144Props,
    footer5Props,
    closeProps,
    frame15903Props,
    frame159032Props,
    frame159033Props,
    frame159034Props,
    frame159035Props,
    frame159036Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x11-faq-s-page-tablet screen">
        <div className="overlap-group">
          <div className="frame-1603">
            <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
            <h1 className="fa-qs valign-text-middle typographyheadlineh4-extrabold-24">{faqs}</h1>
            <img className="rectangle-76" src={rectangle76} />
            <Footer52 {...footer5Props} />
          </div>
          <div className="frame-1653">
            <div className="frame-1589 border-1px-black-2">
              <div className="frame-1591">
                <div className="text-3 valign-text-middle typographyheadlineh4-extrabold-24">{text127}</div>
                <Close src={closeProps.src} />
              </div>
              <p className="text-4 typographybody16-regular">{text128}</p>
            </div>
            <Frame159032 text129={frame15903Props.text129} plusProps={frame15903Props.plusProps} />
            <Frame159032 text129={frame159032Props.text129} plusProps={frame159032Props.plusProps} />
            <Frame159032 text129={frame159033Props.text129} plusProps={frame159033Props.plusProps} />
            <Frame159032 text129={frame159034Props.text129} plusProps={frame159034Props.plusProps} />
            <Frame159032 text129={frame159035Props.text129} plusProps={frame159035Props.plusProps} />
            <Frame159032 text129={frame159036Props.text129} plusProps={frame159036Props.plusProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default X11FAQsPageTablet;
