import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/components/Home.module.css";


const Hero = ({
  heroImg,
  position,
  breadcrumbs,
  altName,
  caption,
  courtesy,
}) => {
  return (
    <section id="stories-banner" className={style.storiesBanner}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div
              className={`${style.heroCarousal} ${style.template1CustomHeight}`}
            >
              <div className={style.heroImgCnt}>
                <div className={style.posRelFull}>
                  <div
                    className={`${style.hoverDiv} ${style.template1CustomHeight}`}
                  >
                    <img src="https://img-cdn.publive.online/fit-in/1280x720/filters:format(webp)/elle-india/media/media_files/2025/09/03/floral-saree-designs-2025-09-03-11-09-00.png" alt="" />
                    {/* <Image
                      src={heroImg ?? ""}
                      fill
                      alt={altName ?? "Articles Banner"}
                      priority={true}
                    /> */}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className={style.photoBy}>
              {/* {caption && (
                <span className={style.caption}>
                  {hasHtmlTags(caption) ? htmlParser(caption) : caption}
                </span>
              )}
              {courtesy && (
                <span className={style.courtesy}>
                  {hasHtmlTags(courtesy) ? htmlParser(courtesy) : courtesy}
                </span>
              )} */}
              <span className={style.courtesy}></span>
            </div>
            {/* <StaticAds
              adUnits={[
                {
                  adPath: "/super-leaderboard-ad.jpeg",
                  adSize: [970, 90],
                  minWidth: 1024,
                  maxWidth: Infinity,
                },
                {
                  adPath: "/super-leaderboard-ad.jpeg",
                  adSize: [728, 90],
                  minWidth: 768,
                  maxWidth: 1023,
                },
                {
                  adPath: "/leaderboard-ad.png",
                  adSize: [300, 250],
                  minWidth: 0,
                  maxWidth: 767,
                },
              ]}
            /> */}
            <ol className={style.breadcrum}>
              {/* {breadcrumbs?.map((item, i) => {
                return (
                  <li className={style.breadcrumItem} key={`breadcrumbs-${i}`}>
                    <Link href={Const.ClientLink + item?.slug ?? "#"}>
                      <span style={{ textDecoration: "underline" }}>
                        {item?.name ?? ""}
                      </span>
                    </Link>
                  </li>
                );
              })} */}
              <li className={style.breadcrumItem}>
                <Link href={""} style={{ textDecoration: "underline" }}>
                <span>
                  style</span></Link>
              </li>
              <li className={style.breadcrumItem}>
                <Link href={""} style={{ textDecoration: "underline" }}>
                <span>
                  Fashion</span></Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
