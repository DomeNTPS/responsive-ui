import "./App.css";
import footballer from "./assets/image/footballer.png";
import basketball from "./assets/image/basketball.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const athleteData = [
    {
      header: "CONNECTION",
      description:
        "Connect with coaches directly, you can ping coaches to view profile.",
      background: "#FFF;",
      height: "216px",
    },
    {
      header: "COLLABORATION",
      description:
        "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      background: "#F5F4F9",
      height: "256px",
    },

    {
      header: "GROWTH",
      description:
        "Resources and tools for you to get better as a student Athelte.Access to training classes, tutor sessions, etc",
      background: "#5E3DB3",
      height: "297px",
    },
  ];

  const playerData = [
    {
      header: "CONNECTION",
      description:
        "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      background: "#FFF;",
      height: "256px",
    },
    {
      header: "COLLABORATION",
      description:
        "Work with recruiter to increase your chances of finding talented athlete.",
      background: "#F5F4F9",
      height: "245px",
    },

    {
      header: "GROWTH",
      description: "Save your time, recruit proper athlets for your team.",
      background: "#090C35",
      height: "268px",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "item",
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div>
      <header className="App-header">
        <div className="athlete">
          <img className="image" alt="pic" src={footballer}></img>
          <div>
            <div className="header">athlete</div>
            {athleteData.map((data, index) => (
              <div
                className="section"
                style={{
                  backgroundColor: `${data.background}`,
                  minHeight: `${data.height}`,
                }}
                key={index}
              >
                <div className="label">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div className="orderContainer">
                      <text className="listOrder">0{index + 1}</text>
                      <div
                        style={{
                          backgroundColor:
                            index === playerData.length - 1
                              ? "#FFFFFF"
                              : "#603EBE",
                          width: "17px",
                          height: "4px",
                          borderRadius: "4px",
                          flexShrink: 0,
                        }}
                      ></div>
                    </div>
                    {data.header}
                  </div>

                  <div
                    className="description"
                    style={{
                      color:
                        index === playerData.length - 1 ? "white" : "black",
                    }}
                  >
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="player" style={{ width: "100%" }}>
          <div>
            <img className="image" alt="pic" src={basketball}></img>
          </div>

          <div>
            <div className="header">PLAYERS</div>
            {playerData.map((data, index) => (
              <div
                className="section"
                style={{
                  backgroundColor: `${data.background}`,
                  minHeight: `${data.height}`,
                }}
                key={index}
              >
                <div className="label">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div className="orderContainer">
                      <text
                        className="listOrder"
                        style={{
                          color:
                            index === playerData.length - 1
                              ? "#8F6BE8"
                              : "black",
                        }}
                      >
                        0{index + 1}
                      </text>
                      <div
                        style={{
                          backgroundColor:
                            index === playerData.length - 1
                              ? "#FFFFFF"
                              : "#603EBE",
                          width: "17px",
                          height: "4px",
                          borderRadius: "4px",
                          flexShrink: 0,
                        }}
                      ></div>
                    </div>
                    {data.header}
                  </div>
                  <div
                    className="description"
                    style={{
                      color:
                        index === playerData.length - 1 ? "white" : "black",
                    }}
                  >
                    {data.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-athlete">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="header">athlete</div>
            <img className="image" alt="pic" src={footballer}></img>
          </div>
          <div
            style={{
              backgroundColor: "#F5F4F9",
              height: "284px",
              marginTop: "-40px",
            }}
          >
            <Slider {...settings}>
              {athleteData.map((data, index) => (
                <div style={{ maxWidth: "284px" }}>
                  <div className="label">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div className="orderContainer">
                        <text className="listOrder">0{index + 1}</text>
                        <div
                          style={{
                            backgroundColor: "#603EBE",
                            width: "17px",
                            height: "4px",
                            borderRadius: "4px",
                            flexShrink: 0,
                          }}
                        ></div>
                      </div>
                      {data.header}
                    </div>
                    <div className="description">{data.description}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="container-player">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="header">players</div>
            <img className="image" alt="pic" src={basketball}></img>
          </div>
          <div
            style={{
              backgroundColor: "#F5F4F9",
              height: "284px",
              marginTop: "-50px",
            }}
          >
            <Slider {...settings}>
              {playerData.map((data, index) => (
                <div style={{ maxWidth: "284px" }}>
                  <div className="label">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div className="orderContainer">
                        <text className="listOrder">0{index + 1}</text>
                        <div
                          style={{
                            backgroundColor: "#603EBE",
                            width: "17px",
                            height: "4px",
                            borderRadius: "4px",
                            flexShrink: 0,
                          }}
                        ></div>
                      </div>
                      {data.header}
                    </div>
                    <div className="description">{data.description}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
