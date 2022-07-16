# react-native-auto-countdown

### A React-Native Component for countdown timer."

### install like this

```sh
npm i react-native-auto-countdown
```


https://user-images.githubusercontent.com/75023861/179362336-c4db9712-64a2-43b0-b052-1b83ff3cd8a4.mp4




| props      | details                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------- |
| minute     | give the minutes you want for countdown (must given prop if nothing to give then just give 0 ) |
| second     | give the seconds you want (must given prop if nothing to give then just give 0 )               |
| hour       | give the hours you want (must given prop if nothing to give then just give 0 )                 |
| textcolor  | it will change the color of time                                                               |
| fontsize   | it will change the font size of time                                                           |
| fontfamily | it will change the font family of time                                                         |
| autoStart  | give this = {true} must given for now. We will update in future.                               |

### simple usage with all props

```sh
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RnAutoCountDown from 'react-native-auto-countdown';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <View style={{alignSelf: 'center'}}>
        <RnAutoCountDown
          hour={1}
          minute={1}
          second={1}
          fontsize={20}
          fontfamily={'Poppins-Regular'}
          textcolor={'blue'}
          autoStart={true}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

```

## License

MIT

### Contact

Email: saurabhsatapathy0@gmail.com<br>
LinkedIn: https://www.linkedin.com/in/saurabh-satapathy-692a6a1b9/<br>
GitHub: https://github.com/saurabh190802 <br>
Twitter: https://mobile.twitter.com/SaurabhSatapat1
