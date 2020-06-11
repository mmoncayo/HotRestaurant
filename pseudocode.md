# Front End

home/
   button href to /tables route
   button href to /reservations route

tables/
  button href to /reservations route
  button href to / route

  currentReservations div card
  waitingList div card

  ajax get("/api/tables")
  for each table in response.currentReservations:
    add html to #currentReservations card
  for each table in response.waitingList:
    add html to #waitingList card
  

reservations/
  button href to /tables route
  button href to / route

  form card
  4 inputs:
    - name 
    - phone
    - email
    - uniqueID
- submit button

  on submit:
    $.ajax("/api/makereservation", table)
    table is object with 4 properties as stated above

  afterward, popup if waiting list or reservation confirmed
- 

# Back End

// routes

get(/)
  sendFile(home.html)

get(/tables)
  sendFile(tables.html)

get(/reservations)
  sendFile(reservations.html)

// api

get(/api/tables)
  send array of tables as json
  {
    currentReservations: [
      table1,
      table2,
      table3
    ]
    waitingList: [
      table1

    ]
  }

post(/api/makereservation)
  if currentReservations.length === 5:
    append table to waitingList;
  else:
    append table to currentReservations

  append table to array
  return "reservation" or "waiting list"