import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTrain,
    faHotel,
    faTree,
    faPlane,
    faCalendarDays,
    faPerson
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import {DateRange} from "react-date-range";
import {useState, FC} from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

interface DateType {
    startDate: Date;
    endDate: Date;
    key: string;
};

interface OptionsType {
    adult: number;
    children: number;
    room: number;
}

interface HeaderProps {
    type: string
}

const Header: FC<HeaderProps> = ({type}) => {
    const [openDate, setOpenDate] = useState<boolean>(false);
    const [date, setDate] = useState<DateType[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [options, setOptions] = useState<OptionsType[]>([
        {
            adult: 1,
            children: 0,
            room: 0
        }
    ]);

    const handleOption = (name: string, operation: string): void => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            };
        });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTrain} />
                        <span>Train</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Hotels</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTree} />
                        <span>Amusement Park</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            Welcome to MyTrain. Where you can customize everything to your trip!
                        </h1>
                        <p className="headerDescription">Get rewarded with your travels 💖</p>
                        <Button variant="contained" className="headerButton">Sign in / Register</Button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                                <Input type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                     />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                                    date[0].endDate,
                                    "dd/MM/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item: any) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                    />
                                )}
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="headerSearchText"
                                >{`${options[0].adult} Adult - ${options[0].children} Children - ${options[0].room} Room`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options[0].adult <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options[0].adult}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options[0].children <= 0}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options[0].children}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options[0].room <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {" "}
                                                    {options[0].room}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="headerSearchItem">
                                <Button variant="contained" color="warning" className="headerButton">Search</Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
