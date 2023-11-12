import { Rating } from "@mui/material";
import Chat from "./Chatbot";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

export default function WidgetBoard() {
  // const [expandedCard, setExpandedCard] = useState<number | null>(null);
  // const toggleExpansion = (cardIndex: number) => {
  //   if (expandedCard === cardIndex) {
  //     setExpandedCard(null);
  //   } else {
  //     setExpandedCard(cardIndex);
  //   }
  // };

  return (
    <>
      <div className="container mx-auto mt-6 p-6">
        <div className="grid grid-cols-3 gap-10">
          <div className="column flex flex-col place-content-between">
            {/* first card */}
            <Card height="250px" width="100%">
              Community Support
            </Card>
            <div className="flex flex-row place-content-between">
              {/* second card lawyers */}
              <Link href="/lawyer" className="p-0 m-0 w-5/12">
                <Card height="200px" width="100%">
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap", // Enables Flexbox
                      justifyContent: "center", // Centers horizontally
                      height: "100%", // Take full height of the Card
                      width: "100%", // Take full width of the Card
                    }}
                  >
                    <div
                      style={{
                        marginTop: "10%",
                        height: "100px", // Circle size
                        width: "100px", // Circle size
                        backgroundColor: "white", // Circle color
                        borderRadius: "50%", // Makes the div circular
                        backgroundImage: "url('lawyer1.jpg')",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    Larence Crittin
                    <Rating
                      name="read-only"
                      value={4}
                      readOnly
                      precision={0.5}
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#ffeb3b", // Example of a brighter yellow
                        },
                        // Or use a specific yellow color code like '#ffd700'
                      }}
                    />
                  </div>
                </Card>
              </Link>{" "}
              {/* third card insurance */}
              <Card height="200px" width="42%">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap", // Enables Flexbox
                    justifyContent: "center", // Centers horizontally
                    height: "100%", // Take full height of the Card
                    width: "100%", // Take full width of the Card
                  }}
                >
                  <div
                    style={{
                      marginTop: "10%",
                      height: "100px", // Circle size
                      width: "100px", // Circle size
                      backgroundColor: "white", // Circle color
                      // borderRadius: "100%", // Makes the div circular
                      backgroundImage: "url('AXA.png')",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="text-center">Get a quotation now!</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="column flex justify-center">
            {/* fourth card chatbox */}
            <Card height="500px" width="100%">
              <h2 className="mt-4">Have a legal question? Just ask!</h2>
              <div className="flex flex-col">
                <Chat />
              </div>
            </Card>
          </div>

          <div className="column flex flex-col place-content-between">
            <Card height="150px" width="100%">
              Profile
            </Card>
            <Card height="300px" width="100%">
              FAQ's
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
