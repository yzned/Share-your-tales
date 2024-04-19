import UIKit
import WebKit
class ViewConroller:UIViewController{
  @IBOutlet weak var share: UILabel!
  override func viewDidLoad() {
    super.viewDidLoad()
      share.transform=CGAffineTransform(rotationAngle: 15)
  }
    
}
