��#   D i s c o r d P o m e l o 
 
 
 
 # # #   * * [ T h i s   w e b s i t e ] ( h t t p s : / / l i x . q a / p o m e l o )   a l l o w s   y o u   t o   c h e c k   i f   t h e   n e w   d i s c o r d   @ u s e r n a m e s   a r e   a v a i l a b l e . * * 
 
 
 
 T h e   b a c k e n d   h a p p e n d s   o n   m y   [ A P I ] ( h t t p s : / / a p i . l i x q a . d e / v 2 / d i s c o r d / p o m e l o - l o o k u p ? u s e r n a m e = x x x x )   a n d   i s n t   p u b l i c   b u t   h a v e   f u n   w i t h   t h i s   s i m p l e   w e b s i t e   a n y w a y s .   D u e   t h e   h i g h   d e m a n d   y o u   c a n   o n l y   c h e c k   1   u s e r n a m e   e a c h   3 0   s e c o n d s   a n d   s o m e   e r r o r s   c a n   o c c u r . 
 
 
 
 I   m a d e   t h i s   w e b s i t e   f o r   f u n   a n d   d i d n t   e v e n   k n o w   t h a t   i t   w i l l   b e   u s e d   s o   m u c h .   T h a n k   y o u   a l l   f o r   u s i n g   i t ! 
 
 
 
 L e t   m e   k n o w   i f   y o u   h a v e   a n y   i d e a s   a n d   i l l   i m p r o v e   t h e   w e b s i t e   a n d   a d d   s o m e   m o r e   c o o l   f e a t u r e s ! 
 
 
 
 * * I f   y o u   l i k e   t h i s   p r o j e c t   f e e l   f r e e   t o   c l i c k   t h e   P+.     I t s   f r e e ! * * 
 
 
 
 #   C o n t a c t 
 
 
 
 # #   * * [ D i s c o r d   S e r v e r   -   C L I C K   T O   J O I N ] ( h t t p s : / / l i x . q a / p o m e l o - d c ) * * 
 
 ^   F o r   s u p p o r t   a n d   c h a t   j o i n   m y   d i s c o r d   a n d   o p e n   a   t i c k e t !   I f   y o u   j o i n   u s i n g   t h e   l i n k   a b o v e   y o u   a u t o m a t i c a l l y   g e t   a c c e s s   t o   t h e   p o m e l o   t a l k   c h a n n e l ! 
 
 
 
 #   A P I 
 
 Y o u   c a n   u s e   t h e   A P I   f o r   f r e e .   T h e   p u b l i c   A P I   i s   l i m i t e d   a n d   y o u   c a n   r u n   i n t o   r a t e   l i m i t s   q u i c k l y .   I f   y o u   w a n t   i n c r e a s e d   r a t e   l i m i t s ,   c r e a t e   a   t i c k e t   o n   s u p p o r t   d i s c o r d . 
 
 
 
 H o w   t o   g e t   p r i v a t e   a c c e s s ?   U s u a l l y   y o u   c a n   g e t   p r i v a t e   a c c e s s   b y   c o n t r i b u t i n g ,   g i v i n g   r e s s o u r c e s   o r   h a v i n g   a   p r o j e c t   t h a t   i   l i k e .   B u t   c o n t a c t   m e   f o r   m o r e   i n f o r m a t i o n . 
 
 
 
 # #   * * E n d p o i n t * * 
 
 -   * U R L *   :   ` h t t p s : / / a p i . l i x q a . d e / v 3 / d i s c o r d / p o m e l o / { u s e r n a m e } ` 
 
 -   * M e t h o d * :   G E T 
 
 -   * H e a d e r s * :   N o   h e a d e r   n e e d e d   f o r   p u b l i c   o n e .   F o r   p r i v a t e   o n e   u s e   ` a u t h o r i z a t i o n :   K E Y `   h e a d e r . 
 
 
 
 # #   * * R e s p o n s e * * 
 
 -   ` d a t a - > u s e r n a m e `   �   Y o u r   c h e c k e d   u s e r n a m e . 
 
         
 
 -   ` d a t a - > c h e c k - > e r r o r s `   �   [ E r r o r ] ( # E r r o r ) 
 
 -   ` d a t a - > c h e c k - > s t a t u s `   �   [ S t a t u s ] ( # S t a t u s ) 
 
 -   ` d a t a - > c h e c k - > a t t e m p t `   �   H o w   m a n y   a t t e m p t s   i t   t o o k   u n t i l   a   v a l i d   r e s p o n s e   w a s   r e t u r n e d   b y   d i s c o r d . 
 
 -   ` d a t a - > c h e c k - > t o k e n `   �   L a s t   1 0   c h a r a c t e r s   o f   t o k e n   u s e d   f o r   t h e   c h e c k   ( C u r r e n t l y   o n l y   i n   d e v / p r i v a t e   e n d p o i n t s ) 
 
 -   ` d a t a - > c h e c k - > u s e r `   �   [ d i s c o r d   u s e r   o b j e c t ] ( h t t p s : / / d i s c o r d . c o m / d e v e l o p e r s / d o c s / r e s o u r c e s / u s e r )   o f   t h e   u s e r   w h o   h a s   t h i s   u s e r n a m e .   ( [ S t a t u s   6 ] ( # S t a t u s ) ) 
 
 
 
 # # #   * * E r r o r * * 
 
 E r r o r s   o n l y   i n   t h e   * d a t a - > c h e c k - > e r r o r s * .   T h e   e r r o r s   o u t s i d e   t h e   d a t a   a r e   g e n e r a l   a p i   e r r o r s . 
 
 
 
 # # # #   D i s c o r d   e r r o r s : 
 
 -   ` U S E R N A M E _ A L R E A D Y _ T A K E N `   �   Y o u r   n a m e   i s   t a k e n   o r   r e s e r v e d .   ( [ S t a t u s ] ( # S t a t u s ) ) 
 
 
 
 # # # #   V a l i d a t o r   e r r o r s : 
 
 -   ` B A D _ L E N G T H `   �   T h e   l e n g t h   o f   y o u r   u s e r n a m e   i s   i n v a l i d .   U s e r n a m e s   m u s t   b e   b e t w e e n   2   a n d   3 2   c h a r s . 
 
 -   ` N O T _ N O R M A L _ N A M E `   �   U s i n g   t h e   p u b l i c   a p i   v e r s i o n   y o u   c a n n o t   c h e c k   2   a n d   3   c h a r   n a m e s .   T h i s   p r e v e n t s   s p a m m i n g   &   s n i p i n g . 
 
 -   ` R E P E A T I N G _ D O T S `   �   R e p e a t i n g   d o t s   l i k e   " . . "   c a n t   b e   p u t   i n   y o u r   u s e r n a m e . 
 
 -   ` I N V A L I D _ C H A R S `   �   D i s c o r d   u s e r n a m e s   c a n   o n l y   c o n t a i n   a - z ,   0 - 9 ,   u n d e r s c o r e s   ( * )   a n d   d o t s   ( . ) . 
 
 -   ` B L A C K L I S T E D * W O R D `   �   Y o u r   n a m e   c o n t a i n s   a   b y   d i s c o r d   b l a c k l i s t e d   w o r d .   F o r   a   l i s t   v i s i t   o u r   d i s c o r d . 
 
 
 
 # # #   * * S t a t u s * * 
 
 -   ` 0 `   �   C h e c k   w a s n t   s e n t   t o   d i s c o r d   b e c a u s e   y o u r   n a m e   d o e s n t   p a s s e d   t h e   v a l i d a t o r .   ( [ E r r o r ] ( # E r r o r ) ) 
 
 -   ` 1 `   �   F a i l e d   t o   s e n d   c h e c k   t o   d i s c o r d   o r   d i s c o r d   r e t u r n e d   i n v a l i d   r e s p o n s e . 
 
 -   ` 2 `   �   Y o u r   u s e r n a m e   i s   * * a v a i l a b l e * * . 
 
 -   ` 3 `   �   Y o u r   u s e r n a m e   i s   * * t a k e n   o r   r e s e r v e d * * . 
 
 -   ` 4 `   �   Y o u r   u s e r n a m e   i s   * * t a k e n * * .   ( I n c o m i n g )   ` * ` 
 
 -   ` 5 `   �   Y o u r   u s e r n a m e   i s   * * r e s e r v e d * * .   ( I n c o m i n g )   ` * ` 
 
 -   ` 6 `   �   Y o u r   u s e r n a m e   i s   * * t a k e n   b y * * .   ( I n c o m i n g )   ` * � ` 
 
 
 
 ` * `   I n   f u t u r e   i   w a n t   t o   a d d   a   e x t r a   c h e c k   t o   d i f f e r e n t i a t e   t a k e n   a n d   r e s e r v e d . 
 
 
 
 ` * � `   I n   f u t u r e   t h i s   s t a t u s   w i l l   r e t u r n   t h e   [ d i s c o r d   u s e r   o b j e c t ] ( h t t p s : / / d i s c o r d . c o m / d e v e l o p e r s / d o c s / r e s o u r c e s / u s e r )   o f   t h e   u s e r   w h o   h a s   t h i s   u s e r n a m e . 
 
 
 
 # #   * * W e b h o o k   i n t e g r a t i o n * \* 
 
 I f   y o u   w a n t   t o   s e n d   w e b h o o k s   a u t o m a t i c a l l y   a f t e r   e v e r y   r e q u e s t ,   a n d   y o u   a r e   t o o   l a z y   t o   m a k e   y o u r   o w n   w e b h o o k   s e n d e r ,   y o u   c a n   a d d   a   b o d y   t o   t h e   r e q u e s t   a n d   t h e   w e b h o o k s   w i l l   b e   s e n t   a u t o m a t i c a l l y . 
 
 
 
 ` w e b h o o k U r l :   U R L `   �   T h a t s   t h e   u r l   f o r   y o u r   d i s c o r d   w e b h o o k   o r   c u s t o m   e n d p o i n t . 
 
 
 
 ` w e b h o o k O n l y :   S T A T U S `   �   S e n d   o n l y   s p e c i f i c   [ S t a t u s ] ( # S t a t u s )   ( E x a m p l e :   S e n d   o n l y   a v a i l a b l e   c h e c k s   t o   w e b h o o k   u s i n g   s t a t u s   2 ) .   I f   y o u   w a n t   t o   u s e   m u l t i p l e ,   c o m m a   s e p e r a t e   t h e m   l i k e   ` 1 , 2 , 3 , 4 ` .   ( I n c o m i n g ) 
 
 
 
 #   C r e d i t s 
 
 -   [ L i x q a ] ( h t t p s : / / l i x . q a / ) 
