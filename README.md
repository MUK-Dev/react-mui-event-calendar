# `react-mui-event-calendar`

# Preview

> Component for [material-ui](https://github.com/mui-org/material-ui). No dependencies, small, highly customizable and theming support!

![Preview of Calendar](https://github.com/MUK-Dev/react-mui-event-calendar/blob/master/images/Event%20Calendar.png)

## Documentation

### Examples

> You can find example [here](https://react-event-calendar-dev.vercel.app/)

## 🚀 Installation

```nodejs
  npm install @MUK-Dev/react-mui-event-calendar
```

`react-mui-event-calendar` brings 1 component. (TypeScript support included)

### `<EventCalendar/>`

A Large Calendar that displays events on certain dates.

```typescript
import { Add, Person } from '@mui/icons-material';
import {
  Avatar,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@mui/material';
import moment from 'moment';
import { EventCalendar } from '@MUK-Dev/react-mui-event-calendar';
import { EventsData } from '@MUK-Dev/react-mui-event-calendar/types';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function App() {
  const data: EventsData = [
    {
      date: new Date(),
      title: 'First',
      popupContent: (
        <>
          <List sx={{ pt: 0 }}>
            {emails.map((email) => (
              <ListItem button key={email}>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}

            <ListItem autoFocus button>
              <ListItemAvatar>
                <Avatar>
                  <Add />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Add account' />
            </ListItem>
          </List>
        </>
      ),
      id: '1',
    },
    {
      date: moment().subtract(2, 'days'),
      title: "Use Google's location service?",
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Disagree</Button>
            <Button>Agree</Button>
          </DialogActions>
        </>
      ),
      id: '2',
    },
    {
      date: moment().subtract(3, 'days'),
      title: 'Third',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth
              variant='standard'
            />
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#000',
      id: '3',
    },
    {
      date: new Date(),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: moment().subtract(10, 'days'),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: moment().subtract(30, 'days'),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      id: '4',
    },
    {
      date: new Date(),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: moment().add(5, 'days'),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: new Date(),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: moment().subtract(2, 'days'),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
    {
      date: moment().add(30, 'days'),
      title: 'Fourth',
      popupContent: (
        <>
          <DialogContent>
            <DialogContentText>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>Subscribe</Button>
          </DialogActions>
        </>
      ),
      color: '#ffe100',
      id: '4',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '3em 0',
      }}
    >
      <EventCalendar
        dataSource={data}
        pallet={{ primary: '#70231d', secondary: '#4a4a4a' }}
        onDataChange={(e) => console.log(e)}
      />
    </div>
  );
}

export default App;
```

## Data structure for events data

| Name         | Type               | Required | Details                                                                                                                                                        |
| ------------ | ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | `string`           | `false`  | unique id for every event                                                                                                                                      |
| title        | `string`           | `true`   |                                                                                                                                                                |
| color        | `hex color string` | `false`  | If not set, the primary color of the theme will be applied                                                                                                     |
| date         | `Date opbject`     | `true`   | Date object can be moment object also, Specifies the day of the event                                                                                          |
| popupContent | `JSX Element`      | `true`   | Popup shown when the event is clicked, Popup only restricts where MUI dialog restricts because it uses [MUI Dialog](https://mui.com/material-ui/react-dialog/) |

## Props

| Name                          | Type      | Default             | Description                                     | Values                       |
| ----------------------------- | --------- | ------------------- | ----------------------------------------------- | ---------------------------- |
| width                         | `string`  | `90%`               | Sets the width of the calendar                  |                              |
| dataSource                    | `Array`   |                     | This prop sets event data                       |                              |
| pallet                        | `object`  | `MUI default theme` | Sets the color theme of the calendar            | `primary: 'hex color code'`, |
| `secondary: 'hex color code'` |
| readonly                      | `boolean` | `false`             | Prevents adding of events                       | `true`,`false`               |
| elevation                     | `number`  | `0`                 | Sets elevation/box-shadow of calendar           |                              |
| showEventPopup                | `boolean` | `true`              | This prop is used to set toolbar properties     | `true`,`false`               |
| onDataChange                  | `event`   |                     | This event is fired when a new event is created |                              |

## 👉 Authors

- M. Usman Khilji ([MUK-Dev](http://github.com/MUK-Dev))
