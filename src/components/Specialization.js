import React from 'react'

function Specilalization(props) {
    return (
        <div class="form-inline">
            <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Specialization</label>
            <span class="text-danger">*</span>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option selected className="choose">--Select--</option>
                {props.dept.map((option, index) => (
                    <option value={index + 1}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Specilalization
