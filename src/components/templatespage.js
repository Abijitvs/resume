import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import './signlog.css';

const styles = StyleSheet.create({
  page: {
    width: '210mm',
    height: '297mm',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  section: {
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #ccc'
  },
  header: {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333'
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333'
  },
  text: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#666'
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '20px'
  }
});

const MyDocument = ({ name, email, phone, objective, education, workExperience, skills, imageUrl }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {imageUrl && <Image src={imageUrl} style={styles.image} />}
      <View style={styles.section}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Objective:</Text>
        <Text style={styles.text}>{objective}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Education:</Text>
        {education.map((edu, index) => (
          <View key={index}>
            <Text style={styles.text}>{edu.degree}, {edu.institution}</Text>
            <Text style={styles.text}>{edu.date}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Work Experience:</Text>
        {workExperience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.text}>{exp.company}, {exp.position}</Text>
            <Text style={styles.text}>{exp.date}</Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Skills:</Text>
        {skills.map((skill, index) => (
          <Text style={styles.text} key={index}>{skill}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

const TemplatesPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objective, setObjective] = useState('');
  const [education, setEducation] = useState([{ degree: '', institution: '', date: '' }]);
  const [workExperience, setWorkExperience] = useState([{ company: '', position: '', date: '', description: '' }]);
  const [skills, setSkills] = useState(['']);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePdf = async () => {
    const doc = (
      <MyDocument
        name={name}
        email={email}
        phone={phone}
        objective={objective}
        education={education}
        workExperience={workExperience}
        skills={skills}
        imageUrl={imageUrl} // Pass the imageUrl prop
      />
    );
    const pdfBlob = await pdf(doc).toBlob();
    saveAs(pdfBlob, 'resume.pdf');
  };

  return (
    <div className='bg'>
    <section className='registration'>
      <form onSubmit={(e) => e.preventDefault()} className='cardz' style={{width: "25rem"}}>
        <div className='input-box'>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />
        <div className='input-box'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div className='input-box'>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <br />
        <div className='input-box'>
          Objective:
          <textarea value={objective} onChange={(e) => setObjective(e.target.value)} />
        </div>
        <br />
        <div className='input-box'>
          Upload photo:
          <input  type='file' accept='image/*' onChange={handleImageUpload} />
        </div>
        {imageUrl && (
          <div>
            <img src={imageUrl} alt='uploaded' style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
          </div>
        )}
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <div className='input-box'>
              Degree:
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].degree = e.target.value;
                  setEducation(newEducation);
                }}
              />
            </div>
            <br />
            <div className='input-box'>
              Institution:
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].institution = e.target.value;
                  setEducation(newEducation);
                }}
              />
            </div>
            <br />
            <div className='input-box'>
              Date:
              <input
                type="text"
                value={edu.date}
                onChange={(e) => {
                  const newEducation = [...education];
                  newEducation[index].date = e.target.value;
                  setEducation(newEducation);
                }}
              />
            </div>
            <br />
          </div>
        ))}
        <button className='btn btn-dark'
          onClick={(e) => {
            e.preventDefault();
            const newEducation = [...education, { degree: '', institution: '', date: '' }];
            setEducation(newEducation);
          }}
        >
          Add Education
        </button>
        </form>
        </section>


        <div className='registration'>
        <form className='cardz2' style={{width: "25rem"}}>
        <br />
        <h2>Work Experience</h2>
        {workExperience.map((exp, index) => (
          <div key={index}>
            <div className='input-box'>
              Company:
              <input
                type="text"
                value={exp.company}
                onChange={(e) => {
                  const newWorkExperience = [...workExperience];
                  newWorkExperience[index].company = e.target.value;
                  setWorkExperience(newWorkExperience);
                }}
              />
            </div>
            <br />
            <div className='input-box'>
              Position:
              <input
                type="text"
                value={exp.position}
                onChange={(e) => {
                  const newWorkExperience = [...workExperience];
                  newWorkExperience[index].position = e.target.value;
                  setWorkExperience(newWorkExperience);
                }}
              />
            </div>
            <br />
            <div className='input-box'>
              Date:
              <input
                type="text"
                value={exp.date}
                onChange={(e) => {
                  const newWorkExperience = [...workExperience];
                  newWorkExperience[index].date = e.target.value;
                  setWorkExperience(newWorkExperience);
                }}
              />
            </div>
            <br />
            <div className='input-box'>
              Description:
              <textarea
                value={exp.description}
                onChange={(e) => {
                  const newWorkExperience = [...workExperience];
                  newWorkExperience[index].description = e.target.value;
                  setWorkExperience(newWorkExperience);
                }}
              />
            </div>
            <br />
          </div>
        ))}
        <button className='btn btn-dark'
          onClick={(e) => {
            e.preventDefault();
            const newWorkExperience = [...workExperience, { company: '', position: '', date: '', description: '' }];
            setWorkExperience(newWorkExperience);
          }}
        >
          Add Work Experience
        </button>
        <br />
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <div className='input-box'>
              Skill:
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skills];
                  newSkills[index] = e.target.value;
                  setSkills(newSkills);
                }}
              />
            </div>
            <br />
          </div>
        ))}
        <button className='btn btn-dark'
          onClick={(e) => {
            e.preventDefault();
            const newSkills = [...skills, ''];
            setSkills(newSkills);
          }}
        >
          Add Skill
        </button>
        <br />
        <br /><br />
        <button className='dbutton' onClick={generatePdf}>Download Resume</button>
      </form>
    </div>
    </div>
  );
};

export default TemplatesPage;


