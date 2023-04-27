
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDynamicChangeIconSpec.h"

@interface DynamicChangeIcon : NSObject <NativeDynamicChangeIconSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DynamicChangeIcon : NSObject <RCTBridgeModule>
#endif

@end
