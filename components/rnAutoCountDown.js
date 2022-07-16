import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const RnAutoCountDown = ({
  minute,
  second,
  hour,
  fontsize,
  fontfamily,
  textcolor,
  autoStart,
  
}) => {
 


  let min = minute;
  let hr = hour;
  let sec;
  if(minute==0 && second==0){
    min=59;
    sec=59;
    hr=hr-1;
  }
  else if (minute!=0 && second == 0) {
    sec = 59;
    min = min - 1;
  } else {
    sec = second;
  }

  let hsec = 0;
  const [minV, setMinV] = useState(min);
  const [secV, setSecV] = useState(sec);
  const [hourV, setHourV] = useState(hr);

  function startTimer() {
    var countdownTimer = setInterval(function () {
       
      sec = sec - 1;
      if (min != 0 && sec == -1) {
        sec = 59;
        min = min - 1;
        setMinV((prevMinV) => prevMinV - 1);
       
        
        
      }
      if (hr!=0 && (min == 0 && sec == -1)) {
        hr = hr - 1;
        sec = 59;
        min = 59;
        setMinV(59);
        hr=hr-1;
        setHourV(prevHourV => prevHourV - 1);
      
      }
    
    
      secV != 0 && setSecV((prevSecV) => prevSecV - 1);
      setSecV(sec);

      if (hr == 0 &&(min <=0 && sec<=0) ) {
        clearInterval(countdownTimer);
        setResendOtpPressed(false);
      
        
      }
    }, 1000);
  }
 autoStart && useEffect(() => {
 startTimer();
    
  }, []);

 

  return (
    <View >
      <Text
        style={{
          color: textcolor != null ? textcolor : 'red',
          fontFamily: fontfamily != null ? fontfamily : '',
          fontSize: fontsize != null ? fontsize : 15,
         
        }}>
        <Text></Text>
        {hourV < 10 ? <Text>0</Text> : <Text></Text>}
        {hourV}:{minV < 10 ? <Text>0</Text> : <Text></Text>}
        {minV}:{secV < 10 ? <Text>0</Text> : <Text></Text>}
        {secV}
      </Text>
    </View>
  );
};

export default RnAutoCountDown;

const styles = StyleSheet.create({});
