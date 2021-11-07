import React from "react";
import "./Style.css";

const RegForm = () => {

    const [userDetails, setUserDetails] = React.useState({
        fullNames: "",
        email: "",
        phoneNumber: "",
        employmentStatus: "employed",
        gender: "male",
        opportunities: [],
        aboutMe: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "opportunities":
                let opportunities = [...userDetails.opportunities];
                if (e.target.checked) {
                    opportunities.push(value);
                } else {
                    const opportunityIndex = opportunities.findIndex(
                        (opportunity) => opportunity === value
                    );
                    opportunities.splice(opportunityIndex, 1);
                }
                console.log(opportunities);
                return setUserDetails({
                    ...userDetails,
                    opportunities: opportunities,
                });

            default:
                return setUserDetails({
                    ...userDetails,
                    [name]: value,
                });
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };
    return (
        <div className="reg">
            <h2 className="reg_h2">Create an account</h2>
            <form
                className="reg_form"
                onSubmit={handleFormSubmit}
            >



                <div className="reg_section_name_email_phone">

                    <div className="reg_section">
                        <label htmlFor="fullNames" className="reg_label">
                            <h2 className="reg_label_h2"> Full Names* </h2>
                        </label>
                        <input
                            required
                            type="text"
                            name="fullNames"
                            id="fullNames"
                            placeholder="Name..."
                            className="reg_input"
                            value={userDetails.fullNames}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="reg_section">
                        <label htmlFor="email" className="reg_label">
                            <h2 className="reg_label_h2">   Email Address* </h2>
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email..."
                            className="reg_input"
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="reg_section">
                        <label htmlFor="phone" className="reg_label">
                            <h2 className="reg_label_h2">    Phone Number* </h2>
                        </label>
                        <input
                            required
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="phone number..."
                            className="reg_input"
                            value={userDetails.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>






                </div>


                <div className="reg_section_employment_radio_checkbox">

                    <div className="reg_section">
                        <label
                            htmlFor="employmentStatus"
                            className="reg_label"
                        >
                            <h2 className="reg_label_h2"> Employment Status*  </h2>
                        </label>
                        <select
                            required
                            name="employmentStatus"
                            id="employmentStatus"
                            className="reg_select_employment"
                            value={userDetails.employmentStatus}
                            onChange={handleInputChange}
                        >
                            <option   className="reg_option"  value="employed">Employed</option>
                            <option   className="reg_option"  value="unemployed">Unemployed</option>
                            <option   className="reg_option"  value="selfEmployed">Self Employed</option>
                            <option   className="reg_option"  value="student">Student</option>
                        </select>
                    </div>


                    <div className="reg_section_radio">

                        <label htmlFor="gender"  className="reg_label_radio">
                            <h2 className="reg_label_h2"> Gender*  </h2>
                        </label>

                        <div className="reg_container_radio">
                            <div className="reg_box_radio">
                                <p className="reg_box_text">Male</p>
                                <input
                                    required
                                    type="radio"
                                    name="gender"
                                    id="gender"
                                    className="reg_input_radio"
                                    value="male"
                                    checked={userDetails.gender === "male"}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="reg_box_radio">
                                <p className="reg_box_text">Female</p>
                                <input
                                    required
                                    type="radio"
                                    name="gender"
                                    id="gender"
                                    className="reg_input_radio"
                                    value="female"
                                    checked={userDetails.gender === "female"}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div  className="reg_section_checkbox">
                        <label
                            htmlFor="opportunities"
                            className="reg_label_checkbox"
                        >
                            <h2 className="reg_label_h2">  Interested Opportunities  </h2>
                        </label>
                        <div className="reg_container_checkbox">

                            <div className="reg_box_checkbox">

                                <p className="reg_box2_text" >Contract</p>
                                <input
                                    type="checkbox"
                                    name="opportunities"
                                    id="contract"
                                    value="contract"
                                    className="reg_input_checkbox"
                                    checked={userDetails.opportunities.includes(
                                        "contract"
                                    )}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="reg_box_checkbox">
                                <p className="reg_box2_text">Part Time</p>
                                <input
                                    type="checkbox"
                                    name="opportunities"
                                    id="partTime"
                                    value="partTime"
                                    className="reg_input_checkbox"
                                    checked={userDetails.opportunities.includes(
                                        "partTime"
                                    )}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="reg_box_checkbox">
                                <p className="reg_box2_text">Full Time</p>
                                <input
                                    type="checkbox"
                                    name="opportunities"
                                    id="fullTime"
                                    value="fullTime"
                                    className="reg_input_checkbox"
                                    checked={userDetails.opportunities.includes(
                                        "fullTime"
                                    )}
                                    onChange={handleInputChange}
                                />

                            </div>

                        </div>
                    </div>
                </div>





                <section className="reg_box_textarea">
                    <label htmlFor="aboutMe"  className="reg_label_textarea">
                        <h2 className="reg_label_textarea_h2">   Tell us something about yourself*  </h2>
                    </label>
                    <textarea
                        required
                        name="aboutMe"
                        id="aboutMe"
                        className="reg_input_textarea"
                        value={userDetails.aboutMe}
                        onChange={handleInputChange}
                    />
                </section>

                <section>
                    <button
                        type="submit"
                        className="reg_button"
                    >
                        <h2 className="reg_button_h2">  Create Account  </h2>

                    </button>
                </section>
            </form>
        </div>
    );
};

export default RegForm;