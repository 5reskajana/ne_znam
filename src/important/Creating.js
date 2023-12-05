import React from 'react';
import Shared from './Shared';
import {useState, useEffect} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';


function Creating() {

    const location = useLocation();
    const prepopulatedData = location.state || {};

    const [sectionOneFields, setSectionOneFields] = useState(prepopulatedData.sectionOneFields || [
        {id: 1, label: 'Full name', value: ''},
        {id: 2, label: 'Job title', value: ''},
        {id: 3, label: 'Email', value: ''},
        {id: 4, label: 'Phone', value: ''},
        {id: 5, label: 'Website', value: ''},
        {id: 6, label: 'Location', value: ''},
    ]);

    const [sectionTwoFields, setSectionTwoFields] = useState(prepopulatedData.sectionTwoFields || [
        {id: 1, label: 'Company', value: ''},
        {id: 2, label: 'Job position', value: ''},
        {id: 3, label: 'Date', value: ''},
        {id: 4, label: 'Description', value: ''},
    ]);

    const [sectionThreeFields, setSectionThreeFields] = useState(prepopulatedData.sectionThreeFields || [
        {id: 1, label: 'School', value: ''},
        {id: 2, label: 'Date', value: ''},
        {id: 3, label: 'Degree', value: ''},
        {id: 4, label: 'GPA', value: ''},
    ]);

    const [sectionFourFields, setSectionFourFields] = useState(prepopulatedData.sectionFourFields || []);
    const [sectionFiveFields, setSectionFiveFields] = useState(prepopulatedData.sectionFiveFields || []);


    const handleSaveProgress = () => {
        const formData = {
            sectionOneFields,
            sectionTwoFields,
            sectionThreeFields,
            sectionFourFields,
            sectionFiveFields,
        };


    };

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
            handleSaveProgress();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    const navigate = useNavigate();

    const navigateToDesign = () => {
        handleSaveProgress();
        const sectionOneText = sectionOneFields.map((field) => field.value);
        const sectionTwoText = sectionTwoFields.map((field) => field.value);
        const sectionThreeText = sectionThreeFields.map((field) => field.value);
        const sectionFourText = sectionFourFields.map((field) => field.value);
        const sectionFiveText = sectionFiveFields.map((field) => field.value);


        navigate('/design', {
            state: {
                sectionOneText,
                sectionTwoText,
                sectionThreeText,
                sectionFourText,
                sectionFiveText,
            },
        });
    }


    const handleInputChange = (section, id, event) => {
        const updateFields = (fields, setFields) => {
            const newFields = [...fields];
            newFields.forEach((field) => {
                if (field.id === id) {
                    field.value = event.target.value;
                }
            });
            setFields(newFields);
        };

        switch (section) {
            case 1:
                updateFields(sectionOneFields, setSectionOneFields);
                break;
            case 2:
                updateFields(sectionTwoFields, setSectionTwoFields);
                break;
            case 3:
                updateFields(sectionThreeFields, setSectionThreeFields);
                break;
            case 4:
                updateFields(sectionFourFields, setSectionFourFields);
                break;
            case 5:
                updateFields(sectionFiveFields, setSectionFiveFields);
                break;
            default:
                break;
        }
    };
    const handleAddFields = (section) => {
        const addFields = (fields, setFields) => {
            const commonLabels = [
                {label: 'Company'},
                {label: 'Job position'},
                {label: 'Date'},
                {label: 'Description'},
            ];

            if (section === 3) {
                commonLabels[0].label = 'School';
                commonLabels[1].label = 'Date';
                commonLabels[2].label = 'Degree';
                commonLabels[3].label = 'GPA';
            }

            setFields((prevFields) => [
                ...prevFields,
                ...Array.from({length: commonLabels.length}, (_, index) => ({
                    ...commonLabels[index],
                    id: prevFields.length + index + 1,
                    value: '',
                })),
            ]);
        };

        switch (section) {
            case 2:
                addFields(sectionTwoFields, setSectionTwoFields);
                break;
            case 3:
                addFields(sectionThreeFields, setSectionThreeFields);
                break;
            case 4: // For Skills
                addFields([], setSectionFourFields);
                break;
            case 5: // For Languages
                addFields([], setSectionFiveFields);
                break;
            default:
                break;
        }
    };

    const handleRemoveFields = (section, count) => {
        const removeFields = (fields, setFields) => {
            setFields((prevFields) => prevFields.slice(0, prevFields.length - count));
        };

        switch (section) {
            case 2:
                removeFields(sectionTwoFields, setSectionTwoFields);
                break;
            case 3:
                removeFields(sectionThreeFields, setSectionThreeFields);
                break;
            case 4: // For Skills
                removeFields(sectionFourFields, setSectionFourFields);
                break;
            case 5: // For Languages
                removeFields(sectionFiveFields, setSectionFiveFields);
                break;
            default:
                break;
        }

    };

    const convertedText = [
        ...sectionOneFields,
        ...sectionTwoFields,
        ...sectionThreeFields,
        ...sectionFourFields,
        ...sectionFiveFields,
    ].map((field) => field.value).join(' ');


    return (
        <div className="cover" id="creating">
            <Shared/>
            <a className='go-right' onClick={navigateToDesign}>&gt;</a>
            <div className="container">
                <div className="input-container">
                    <div className="section">
                        <h2>Personal Info</h2>
                        <form>
                            {sectionOneFields.map((field) => (
                                <div key={field.id}>
                                    <label>{field.label}</label>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(event) => handleInputChange(1, field.id, event)}
                                    />
                                </div>
                            ))}
                        </form>
                    </div>

                    <div className="section">
                        <h2>Work Experience</h2>
                        <form>
                            {sectionTwoFields.map((field) => (
                                <div key={field.id}>
                                    <label>{field.label}</label>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(event) => handleInputChange(2, field.id, event)}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className="buttons">
                            <button onClick={() => handleAddFields(2)} className="add">
                                Add work experience
                            </button>
                            {sectionTwoFields.length > 4 && (
                                <button onClick={() => handleRemoveFields(2, 4)} className="remove">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="section">
                        <h2>Education</h2>
                        <form>
                            {sectionThreeFields.map((field) => (
                                <div key={field.id}>
                                    <label>{field.label}</label>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(event) => handleInputChange(3, field.id, event)}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className="buttons">
                            <button onClick={() => handleAddFields(3)} className="add">
                                Add education
                            </button>
                            {sectionThreeFields.length > 4 && (
                                <button onClick={() => handleRemoveFields(3, 4)} className="remove">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="section">
                        <h2>Skills</h2>
                        <form>
                            {sectionFourFields.map((field) => (
                                <div key={field.id}>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(event) => handleInputChange(4, field.id, event)}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className="buttons">
                            <button onClick={() => handleAddFields(4)} className="add">
                                Add skills
                            </button>
                            {sectionFourFields.length > 0 && (
                                <button onClick={() => handleRemoveFields(4, 1)} className="remove">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="section">
                        <h2>Languages</h2>
                        <form>
                            {sectionFiveFields.map((field) => (
                                <div key={field.id}>
                                    <input
                                        type="text"
                                        value={field.value}
                                        onChange={(event) => handleInputChange(5, field.id, event)}
                                    />
                                </div>
                            ))}
                        </form>
                        <div className="buttons">
                            <button onClick={() => handleAddFields(5)} className="add">
                                Add languages
                            </button>
                            {sectionFiveFields.length > 0 && (
                                <button onClick={() => handleRemoveFields(5, 1)} className="remove">
                                    Delete
                                </button>
                            )}
                        </div>
                    </div>

                </div>
                <div className="converted-text-container">
                    <div className="converted-text">
                        <div className="section">

                            <p>
                                {sectionOneFields.map((field, index) => {
                                    let styleClass;
                                    switch (index) {
                                        case 0:
                                            styleClass = 'special-name-0';
                                            break;
                                        case 1:
                                            styleClass = 'special-name-1';
                                            break;
                                        case 2:
                                            styleClass = 'special-name-2';
                                            break;
                                        case 3:
                                            styleClass = 'special-name-3';
                                            break;
                                        case 4:
                                            styleClass = 'special-name-4';
                                            break;
                                        case 5:
                                            styleClass = 'special-name-5';
                                            break;


                                        default:
                                            styleClass = '';
                                            break;
                                    }

                                    return (
                                        <span key={index} className={styleClass}>
                      {field.value}
                                            <br/>
                    </span>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="section">
                            <h3 className="work-experience">Work Experience</h3>
                            <p>
                                {sectionTwoFields.map((field, index) => {
                                    let styleClass;
                                    switch (index) {
                                        case 0:
                                        case 4:
                                        case 8:
                                        case 12:
                                            styleClass = 'work-exp-0';
                                            break;
                                        case 1:
                                        case 5:
                                        case 9:
                                        case 13:
                                            styleClass = 'work-exp-1';
                                            break;
                                        case 2:
                                        case 6:
                                        case 10:
                                        case 14:
                                            styleClass = 'work-exp-2';
                                            break;
                                        case 3:
                                        case 7:
                                        case 11:
                                        case 15:
                                            styleClass = 'work-exp-3';
                                            break;
                                        default:
                                            styleClass = '';
                                            break;
                                    }

                                    return (
                                        <span key={index} className={styleClass}>
                      {field.value}
                                            <br/>
                    </span>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="section">
                            <h3 className="education">Education</h3>
                            <p>
                                {sectionThreeFields.map((field, index) => {
                                    let styleClass;
                                    switch (index) {
                                        case 0:
                                        case 4:
                                        case 8:
                                        case 12:
                                            styleClass = 'education-0';
                                            break;
                                        case 1:
                                        case 5:
                                        case 9:
                                        case 13:
                                            styleClass = 'education-1';
                                            break;
                                        case 2:
                                        case 6:
                                        case 10:
                                        case 14:
                                            styleClass = 'education-2';
                                            break;
                                        case 3:
                                        case 7:
                                        case 11:
                                        case 15:
                                            styleClass = 'education-3';
                                            break;
                                        default:
                                            styleClass = '';
                                            break;
                                    }

                                    return (
                                        <span key={index} className={styleClass}>
                      {field.value}
                                            <br/>
                    </span>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="section" id='section-skills'>
                            <h3 className="skills">Skills</h3>
                            <p>
                                {sectionFourFields.map((field, index) => (
                                    <span key={index}>{field.value}<br/></span>
                                ))}
                            </p>
                        </div>
                        <div className="section" id='section-languages'>
                            <h3 className="languages">Languages</h3>
                            <p>
                                {sectionFiveFields.map((field, index) => (
                                    <span key={index}>{field.value}<br/></span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Creating;