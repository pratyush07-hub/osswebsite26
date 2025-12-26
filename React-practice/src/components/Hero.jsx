import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero">
      <Navbar />

      
      <div className="code-bg">
        <pre>
{`
while(true){
  System.out.println(" Open Source ");
  contribute();
}

function buildOSS (){
  return "Open Source Society";
}

for(let i = 0;i < 100; i++){
  console.log(" Code Running... ");
}
  

if(openSource){
  learn();
  build();
  contribute();

  #include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin >> t;
    while(t--){
        int a;
        cin >> a;
        string str1;
        cin >> str1;
        int m, n;
        cin >> m >> n;
        vector <long long> v1(n);
        vector <long long> v2(n);
        for(int i = 0; i < n; i++) cin >> v1[i];
        for(int i = 0;i < n; i++) cin >> v2[i];
         string str2, str3;
        cin >> str2>> str3;
        deque <int> dq;
        for(char ch : str1){
            dq.push_back(ch);
        }
        for(int i = 0;i < m; i++){
            if(str3[i]=='V'){
                dq.push_front(str2 [i]);
            }else{
            dq.push_back(str2 [i]);
        }
        }
        for(char ch : dq){
            cout << ch;
        }
        cout << endl;
        
    }
}

}
`.repeat(20)}
        </pre>
      </div>

    
      {showText && (
        <div className={`hero-text ${showText ? "show" : ""}`}>
          <h1>Hello !</h1>
          <h2>Welcome to OSS</h2>
          <p>Fueling Tech Passion Through Open Source</p>
        </div>
      )}
    </div>
  );
}


