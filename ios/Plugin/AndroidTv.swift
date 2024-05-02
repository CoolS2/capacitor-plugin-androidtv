import Foundation

@objc public class AndroidTv: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
