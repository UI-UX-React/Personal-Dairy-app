import React from 'react';
import moment from 'moment';
import './calendar.css';

export default class Calendar extends React.Component{
    
    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    }

    constructor(props) {
        super(props);
        this.width = props.width || "1020px";
        this.style = props.style || {};
         //this.style.width = this.width; // add this
    }


    weekdays = moment.weekdays(); //["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"]
    weekdaysShort = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    months = moment.months();
    // onLogoutClick(){
    //     alert('logout')
    // }

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();

    }
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <div onClick={(e)=> {this.onSelectChange(e, data)}}>
                        {data}
                    </div>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    MonthNav = () => {
        return (
            <span className="label-month"
                onClick={(e)=> {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                 <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }
    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ?
            <input
                defaultValue = {this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput}}
                onKeyUp= {(e) => this.onKeyUpYear(e)}
                onChange = {(e) => this.onYearChange(e)}
                type="number"
                placeholder="year"/>
            :
            <span
                className="label-year"
                onDoubleClick={(e)=> { this.showYearEditor()}}>
                {this.year()}
            </span>
        );
    }

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        }, () => {
          console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    


    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <div className="row">
        <div key={day} className="week-day" style={{padding: "10px 65px 0px 65px"}}>{day}</div>
                </div>
                
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<div key={i * 80} className="emptySlot" style={{width:"122px",height:"0", display: "inline-block"}}>
                {""}
                </div>
            );
        }

        console.log("blanks: ", blanks);

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d === this.currentDay() ? "day current-day": "day");
            let selectedClass = (d === this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <div class="card text-center" style={{display: "inline-block",width: "min-content" , border: "1px solid", margin:"10px",borderRadius:"15px"}}>
                     <div class="card-body" key={d} className={className + selectedClass} onClick={(e)=>{this.onDayClick(e, d)}} style={{
    fontSize: "larger",
    fontWeight: "500"}}>                        
                          {d}                      
                    <p class="card-text"> 😄</p>
                    
                 
                    
                    </div>
                    <div class="card-footer" style={{
    fontSize: "larger",
    fontWeight: "500"}}>
                   
                    <a href="/Editor"> Title of the Day</a>
                
                    </div>
                </div>
                         );
        }


        console.log("days: ", daysInMonth);

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <div key={i*100}>
                    {d}
                </div>
            );
        })

        return(
            <div className="calendar-container" style={this.style}>
            <div className="calendar">
                <div>
                    <div className="calendar-header">
                        <div colSpan="6" style={{display: "table"}}>
                            <this.MonthNav />
                            {""} &nbsp;
                            <this.YearNav />
                        </div>
                        <div colSpan="2" className="nav-month">
                        {/*     <i className="prev fa fa-fw fa-chevron-left"
                                onClick={(e)=> {this.prevMonth()}}>
                            </i>
                            <i className="prev fa fa-fw fa-chevron-right"
                                onClick={(e)=> {this.nextMonth()}}>
                            </i> */}
                        <a href="/" ><button class="logoutbutton">Logout</button></a>

                      
                        </div>
                    </div>  
                </div>
                <div >
                    < div style={{display: "inline-flex"}}>
                        {weekdays}
                    </div>
                    {trElems}
                </div>
            </div>

        </div>
        );
        
    }
}
