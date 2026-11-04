import {
  Calendar as CalendarWrapper,
  CalendarTtl,
  CalendarP,
  CalendarBlock,
  CalendarMonth,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarNav,
  CalendarPeriod,
  NavActions,
  NavAction,
} from "./Calendar.styled";
import { useState } from "react";

const Calendar = ({ isCreating, date, onDateChange, isEditable  }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : "";

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState(today);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  const startDay = firstDay === 0 ? 6 : firstDay - 1;

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const emptyDays = Array(startDay).fill(null);
  const calendarDays = emptyDays.concat(days);

  const allCalendarDays = calendarDays;

  const handleSelectDate = (day) => {
    const newDate = new Date(year, month, day);

    setSelectedDate(newDate);
    setIsDateSelected(true);
    onDateChange?.(newDate.toISOString());
  };

  const selectedDateFormatted = selectedDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <CalendarWrapper>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>
            {" "}
            {currentMonth.toLocaleDateString("ru-RU", {
              month: "long",
              year: "numeric",
            })}
          </CalendarMonth>
          <NavActions>
            <NavAction
              data-action="prev"
              type="button"
              onClick={handlePrevMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>

            <NavAction
              data-action="next"
              type="button"
              onClick={handleNextMonth}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayName $weekend>сб</CalendarDayName>
            <CalendarDayName $weekend>вс</CalendarDayName>
          </CalendarDaysNames>
          <CalendarCells>
            {allCalendarDays.map((day, index) =>
              day === null ? (
                <CalendarCell key={index} />
              ) : (
                <CalendarCell
                  key={index}
                  $activeday={
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getFullYear() === year
                  }
                  $cellday
                  onClick={() => handleSelectDate(day)}
                >
                  {day}
                </CalendarCell>
              ),
            )}
          </CalendarCells>
        </CalendarContent>
        <CalendarPeriod>
          <CalendarP>
            {isCreating || isEditable  ? (
              isDateSelected ? (
                <>
                  Срок исполнения: <span>{selectedDateFormatted}</span>
                </>
              ) : (
                "Выберите срок исполнения"
              )
            ) : (
              <>
                Срок исполнения: <span>{formattedDate}</span>
              </>
            )}
          </CalendarP>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

export default Calendar;
