#include <iostream>
#include <string>

using namespace std;

void printDay(int dayNumber) {
    string days[] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    if (dayNumber >= 0 && dayNumber <= 6) {
        cout << days[dayNumber] << endl;
    } else {
        cout << "Please enter a number between 0 and 6." << endl;
    }
}

int main() {
    int dayNumber;
    while (true) {
        cout << "Enter a number from 0 to 6: ";
        cin >> dayNumber;
        if (cin.fail() || dayNumber < 0 || dayNumber > 6) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input. Please enter a valid number." << endl;
        } else {
            printDay(dayNumber);
            break;
        }
    }
    return 0;
}
