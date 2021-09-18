import React, { useState } from 'react';
import Specilalization from './Specialization'

function Registration() {
    const cse = ["Computer Science and Engineering", "Multimedia Information Processing", "Embedded Controls and Software"]
    const ece = ["Communication and Networks", "Micro Electronic Systems", "Microelectronics and VLSI Design"]
    const eee = ["Signal Processing", "Telecommunication Systems", "Power and Energy Systems"]

    const [dept, setDept] = useState([]);
    const handleChange = (e) => {
        const department = e.target.value;
        if (department === "1") {
            setDept(cse);
        }
        else
            if (department === "2") {
                setDept(ece);
            }
            else
                if (department === "3")
                    setDept(eee);
        console.log(dept)

    }
    return (
        <div>
            <h1>Online Reporting Module for M.Tech students</h1>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <span class="text-danger">*</span>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label for="date">Birthdate</label>
                    <span class="text-danger">*</span>
                    <input type="date" class="form-control" id="date" />
                </div>
                <div class="form-group">
                    <label for="idnumber">Aadhar/Passport number</label>
                    <span class="text-danger">*</span>
                    <input type="text" class="form-control" id="idnumber" />
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" />
                </div>
                <div>
                    <p>Gender<span class="text-danger">*</span></p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="option1" checked />
                        <label class="form-check-label" for="male">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="option2" />
                        <label class="form-check-label" for="female">
                            Female
                        </label>
                    </div>
                </div>
                <div class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Department</label>
                    <span class="text-danger">*</span>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={handleChange}>
                        <option selected className="choose">--Select--</option>
                        <option value="1">CSE</option>
                        <option value="2">ECE</option>
                        <option value="3">EEE</option>
                    </select>
                </div>
                <Specilalization dept={dept} />
                <div class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Category</label>
                    <span class="text-danger">*</span>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected className="choose">--Select--</option>
                        <option value="1">Open</option>
                        <option value="2">SC/ST</option>
                        <option value="3">OBC</option>
                    </select>
                </div>
                <div>
                    <p>PWD<span class="text-danger">*</span></p>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pwd" id="yes" value="option1" checked />
                        <label class="form-check-label" for="yes">
                            Yes
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="pwd" id="no" value="option2" />
                        <label class="form-check-label" for="no">
                            No
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="documents">Documents</label>
                    <span class="text-danger">*</span>
                    <input type="file" class="form-control" id="documents" accept="application/pdf" />
                </div>
                <div class="form-group">
                    <label for="passportpic">Passport Photo</label>
                    <span class="text-danger">*</span>
                    <input type="file" class="form-control" id="passportpic" accept="image/*" />
                </div>
                <div class="form-group">
                    <label for="notes">Notes</label>
                    <textarea class="form-control" id="notes" rows="3"></textarea>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Registration
