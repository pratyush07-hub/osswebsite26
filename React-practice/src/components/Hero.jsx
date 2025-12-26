
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/hero.css";

export default function Hero() {
  const lines = [
    "Hello !",
    "Welcome to OSS",
    "Fueling Tech Passion Through Open Source"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentLine = lines[lineIndex];
      
      
      setDisplayedText(currentLine.slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      
      if (charIndex + 1 === currentLine.length) {
        setTimeout(() => {
          setCharIndex(0);
          setLineIndex((lineIndex + 1) % lines.length); 
          setDisplayedText("");
        }, 800); 
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

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

#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);
vector<string> split(const string &);

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

    vector<int> compareTriplets(vector<int> a, vector<int> b) {
    int alice = 0;
    int bob = 0;

    for(int i = 0; i < 3; i++) {
        if(a[i] > b[i]) {
            alice++;
        } else if(a[i] < b[i]) {
            bob++;
        }
    }

    return {alice, bob};
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vector<string> a_temp = split(rtrim(a_temp_temp));

    vector<int> a(3);

    for (int i = 0; i < 3; i++) {
        int a_item = stoi(a_temp[i]);

        a[i] = a_item;
    }

    string b_temp_temp;
    getline(cin, b_temp_temp);

    vector<string> b_temp = split(rtrim(b_temp_temp));

    vector<int> b(3);

    for (int i = 0; i < 3; i++) {
        int b_item = stoi(b_temp[i]);

        b[i] = b_item;
    }

    vector<int> result = compareTriplets(a, b);

    for (size_t i = 0; i < result.size(); i++) {
        fout << result[i];

        if (i != result.size() - 1) {
            fout << " ";
        }
    }

    fout << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}
string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
vector<string> split(const string &str) {
    vector<string> tokens;

    string::size_type start = 0;
    string::size_type end = 0;

    while ((end = str.find(" ", start)) != string::npos) {
        tokens.push_back(str.substr(start, end - start));

        start = end + 1;
    }

    tokens.push_back(str.substr(start));

    return tokens;
}

`.repeat(20)}
        </pre>
      </div>


      <div className="hero-text">
        <h1>{displayedText}</h1>
      </div>
    </div>
  );
}
