import React, {useState, useEffect, useRef} from 'react';
import Shared from './Shared';
import {useLocation, useNavigate, Link} from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const colorOptions = [
    '#000000', '#000066', '#570B0B', '#404040',
    '#000033'
];

function Design() {
    const location = useLocation();
    const {
        sectionOneText,
        sectionTwoText,
        sectionThreeText,
        sectionFourText,
        sectionFiveText,
    } = location?.state || {};

    const renderSectionContent = (sectionText, className) => {
        if (Array.isArray(sectionText)) {
            return sectionText.map((line, index) => (
                <p
                    key={index}
                    className={className}
                    style={{color: className === 'special-name' ? selectedSpecialNameColor : selectedColor}}
                >
                    {line}
                </p>
            ));
        } else {
            return null;
        }
    };

    const [uploadedImage, setUploadedImage] = useState(null);
    const [selectedFont, setSelectedFont] = useState('default');
    const [spacingLevel, setSpacingLevel] = useState(1);
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [selectedColorDot, setSelectedColorDot] = useState(colorOptions[0]);
    const [selectedSpecialNameColor, setSelectedSpecialNameColor] = useState(selectedColor);
    const navigate = useNavigate();


    const handleSpacingChange = (event) => {
        setSpacingLevel(parseInt(event.target.value));
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedColorDot(color);
        setSelectedSpecialNameColor(color);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFontChange = (event) => {
        setSelectedFont(event.target.value);
    };

    const designContainerClasses = `design-container ${
        selectedFont === 'font-option-1' ? 'classic-font' :
            selectedFont === 'font-option-2' ? 'magazine-font' :
                selectedFont === 'font-option-3' ? 'eager-font' :
                    selectedFont === 'font-option-4' ? 'distinct-font' :
                        selectedFont === 'font-option-5' ? 'simple-font' :
                            selectedFont === 'font-option-6' ? 'minimal-font' :
                                selectedFont === 'font-option-7' ? 'elegant-font' :
                                    selectedFont === 'font-option-8' ? 'splendid-font' :
                                        selectedFont === 'font-option-9' ? 'nice-font' :
                                            selectedFont === 'font-option-10' ? 'senior-font' :
                                                selectedFont === 'font-option-11' ? 'playful-font' : ''

    }`;


    useEffect(() => {
        const sectionElements = document.querySelectorAll('.section');
        sectionElements.forEach((element) => {
            element.style.letterSpacing = `${spacingLevel * 2}px`;
        });
    }, [spacingLevel]);

    const designContainerRef = useRef(null);


    const handleDownloadPDF = async () => {
        if (!designContainerRef.current) {
            console.error('Design container not found');
            return;
        }

        const pdfBlob = await html2pdf().from(designContainerRef.current).output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'CV.pdf';
        downloadLink.click();

        navigate('/share-download');
    };


    return (
        <div className="cover" id="design">

            <div className="shared-design">
                <Shared/>
            </div>

            <div className={designContainerClasses} ref={designContainerRef}>
                <label htmlFor="image-upload" className="circle-design">
                    {uploadedImage ? (
                        <img
                            src={uploadedImage}
                            alt="Uploaded"
                            style={{
                                maxWidth: '120%',
                                maxHeight: '120%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    ) : (
                        'Upload photo'
                    )}
                </label>
                <input
                    type="file"
                    id="image-upload"
                    onChange={handleImageUpload}
                    style={{display: 'none'}}
                />

                <div className="section" id="design-section-1">
                    {renderSectionContent(sectionOneText, 'special-name')}
                </div>
                <div className="section" id="design-section-2">
                    <h2 style={{color: selectedColor}}>Work Experience</h2>
                    {renderSectionContent(sectionTwoText, 'work-experience')}
                </div>
                <div className="section" id="design-section-3">
                    <h2 style={{color: selectedColor}}>Education</h2>
                    {renderSectionContent(sectionThreeText, 'education')}
                </div>
                <div className="temp">
                    <div className="section" id="design-section-4">
                        <h2 style={{color: selectedColor}}>Skills</h2>
                        {renderSectionContent(sectionFourText, 'skills')}
                    </div>
                    <div className="section" id="design-section-5">
                        <h2 style={{color: selectedColor}}>Languages</h2>
                        {renderSectionContent(sectionFiveText, 'languages')}
                    </div>
                </div>

            </div>

            <div className="sticky-div">
                <div className="sticky-section">
                    <h3>Font and Feel</h3>
                    <div className="select-wrapper">
                        <select value={selectedFont} onChange={handleFontChange}>
                            <option value="default">Original</option>
                            <option value="font-option-1">Classic</option>
                            <option value="font-option-2">Magazine</option>
                            <option value="font-option-3">Eager</option>
                            <option value="font-option-4">Strong</option>
                            <option value="font-option-5">Simple</option>
                            <option value="font-option-6">Minimal</option>
                            <option value="font-option-7">Elegant</option>
                            <option value="font-option-8">Splendid</option>
                            <option value="font-option-9">Nice</option>
                            <option value="font-option-10">Senior</option>
                            <option value="font-option-11">Playful</option>
                        </select>
                        <div className="select-arrow"></div>
                    </div>

                </div>

                <div className="sticky-section-spacing">
                    <h3>Spacing</h3>
                    <input
                        type="range"
                        min="1"
                        max="4"
                        value={spacingLevel}
                        onChange={handleSpacingChange}
                    />
                </div>

                <div className="sticky-section">
                    <h3>Color</h3>
                    <div className="color-dots">
                        {colorOptions.map((color) => (
                            <div
                                key={color}
                                className={`color-circle ${selectedColorDot === color ? 'selected' : ''}`}
                                style={{backgroundColor: color}}
                                onClick={() => handleColorChange(color)}
                            ></div>
                        ))}
                    </div>
                </div>
                <button onClick={handleDownloadPDF} className='download-pdf2'><FontAwesomeIcon icon={faDownload}
                                                                                               size="2x"/></button>
            </div>
            <div className='share-download-buttons'>
                <button onClick={handleDownloadPDF} className='download-pdf'>Download as PDF</button>

            </div>
        </div>
    );
}

export default Design;
